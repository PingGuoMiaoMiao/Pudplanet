import { Component, HostListener, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog-service';
import { MatTableDataSource } from '@angular/material/table';
import { VideoService } from '../../services/video-service';
import { UtilityService } from '../../services/utility-service';
import { MediaService } from '../../services/media-service';
import { NotificationService } from '../../services/notification-service';
import { ErrorHandlerService } from '../../services/error-handler-service';

@Component({
  selector: 'app-video-list',
  standalone: false,
  templateUrl: './video-list.html',
  styleUrl: './video-list.css',
})
export class VideoList implements OnInit {
  pagedVideos: any[] = [];
  loading = false;
  loadingMore = false;
  searchQuery = '';

  pageSize = 10;
  currentPage = 0;
  totalPages = 0;
  totalElements = 0;
  hasMoreVideos = true;
  totalVideos = 0;
  publishedVideos = 0;
  totalDurationSeconds = 0;

  data = new MatTableDataSource<any>([]);

  constructor(
    private dialogService: DialogService,
    private videoService: VideoService,
    private utilityService: UtilityService,
    public mediaService: MediaService,
    private errorHandlerService: ErrorHandlerService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.load();
    this.loadStats();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.offsetHeight;

    if (
      scrollPosition >= pageHeight - 200 &&
      this.hasMoreVideos &&
      !this.loadingMore &&
      !this.loading
    ) {
      this.loadMoreVideos();
    }
  }

  load() {
    this.loading = true;
    this.currentPage = 0;
    this.pagedVideos = [];
    this.videoService.getAllAdminVideos(this.currentPage, this.pageSize, this.searchQuery).subscribe({
      next: (res: any) => {
        this.pagedVideos = res.content;
        this.totalPages = res.totalPages;
        this.totalElements = res.totalElements;
        this.hasMoreVideos = this.currentPage < this.totalPages - 1;
        this.loading = false;
        this.data.data = this.pagedVideos;
      },
      error: (err) => {
        this.loadingMore = false;
        this.loading = false;
        this.errorHandlerService.handle(err, 'Failed to load videos. Please try again later.');
      },
    });
  }

  loadMoreVideos() {
    if (!this.hasMoreVideos || this.loadingMore) return;
    this.loadingMore = true;
    const nextPage = this.currentPage + 1;
    this.videoService.getAllAdminVideos(nextPage, this.pageSize, this.searchQuery).subscribe({
      next: (res: any) => {
        this.pagedVideos = [...this.pagedVideos, ...res.content];
        this.currentPage = nextPage;
        this.hasMoreVideos = this.currentPage < res.totalPages - 1;
        this.loadingMore = false;
        this.data.data = this.pagedVideos;
      },
      error: (err) => {
        this.loadingMore = false;
        this.errorHandlerService.handle(err, 'Failed to load more videos. Please try again later.');
      },
    });
  }

  loadStats() {
    this.videoService.getStatusByAdmin().subscribe((stats: any) => {
      this.totalVideos = stats.totalVideos;
      this.publishedVideos = stats.publishedVideos;
      this.totalDurationSeconds = stats.totalDurationSeconds;
    });
  }

  onSearchChange(event: any) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.currentPage = 0;
    this.load();
  }

  clearSearch() {
    this.searchQuery = '';
    this.currentPage = 0;
    this.load();
  }

  play(video: any) {
    this.dialogService.openVideoPlayer(video);
  }

  createNew() {
    const dialogRef = this.dialogService.openVideoFormDialog('create');
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.load();
        this.loadStats();
      }
    });
  }

  edit(video: any) {
    const dialogRef = this.dialogService.openVideoFormDialog('edit', video);
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.load();
        this.loadStats();
      }
    });
  }

  remove(video: any) {
    this.dialogService
      .openConfirmation(
        'Delete Video?',
        `Are you sure you want to delete the video "${video.title}"? This action cannot be undone.`,
        'Delete',
        'Cancel',
        'danger'
      )
      .subscribe((response) => {
        if (response) {
          this.loading = true;
          this.videoService.deleteVideoByAdmin(video.id).subscribe({
            next: () => {
              this.notification.success('Video deleted successfully!');
              this.load();
              this.loadStats();
            },
            error: (err) => {
              this.loading = false;
              this.errorHandlerService.handle(err, 'Failed to delete video. Please try again later.');
            },
          });
        }
      });
  }

  togglePublish(event: any, video: any) {
    const newPublishedStatus = event.checked;

    this.videoService.setPublishedByAdmin(video.id, newPublishedStatus).subscribe({
      next: (response: any) => {
        video.published = newPublishedStatus;
        this.notification.success(
          response?.message || `Video ${newPublishedStatus ? 'published' : 'unpublished'} successfully!`
        );
        this.loadStats();
      },
      error: (err) => {
        video.published = !newPublishedStatus;
        this.errorHandlerService.handle(err, 'Failed to update video publish status. Please try again later.');
      },
    });
  }

  getPublishedCount(): number {
    return this.publishedVideos;
  }

  getTotalDuration(): string {
    const hours = Math.floor(this.totalDurationSeconds / 3600);
    const minutes = Math.floor((this.totalDurationSeconds % 3600) / 60);
    const seconds = this.totalDurationSeconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  formatDuration(seconds: number): string {
    return this.utilityService.formatDuration(seconds);
  }

  getPosterUrl(video: any): string | null {
    return this.mediaService.getMediaUrl(video, 'image', {
      useCache: true,
    });
  }
}
