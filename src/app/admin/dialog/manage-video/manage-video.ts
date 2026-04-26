import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RATINGS, VIDEO_CATEGORIES } from '../../../shared/constants/app.constants';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NotificationService } from '../../../shared/services/notification-service';
import { ErrorHandlerService } from '../../../shared/services/error-handler-service';
import { VideoService } from '../../../shared/services/video-service';
import { MediaService } from '../../../shared/services/media-service';

@Component({
  selector: 'app-manage-video',
  standalone: false,
  templateUrl: './manage-video.html',
  styleUrl: './manage-video.css',
})
export class ManageVideo {
  isSaving = false;
  uploadProgress = 0;
  posterProgress = 0;

  categoriesAll = VIDEO_CATEGORIES;
  ratings = RATINGS;

  videoForm: any;

  videoPreviewUrl: string | ArrayBuffer | null = null;
  posterPreviewUrl: string | ArrayBuffer | null = null;
  videoLoading = false;
  posterLoading = false;
  isEditMode: boolean = false;
  error = '';

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private videoService: VideoService,
    private fb: FormBuilder,
    private notification: NotificationService,
    private cdr: ChangeDetectorRef,
    private mediaService: MediaService,
    public dialogRef: MatDialogRef<ManageVideo>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEditMode = data?.mode === 'edit';

    this.videoForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      year: [new Date().getFullYear(), [Validators.required]],
      category: ['', [Validators.required]],
      rating: [[], [Validators.required]],
      duration: [0],
      src: ['', [Validators.required]],
      poster: ['', [Validators.required]],
      published: [false],
    });
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      const video = this.data.video;

      this.videoForm.patchValue({
        title: video.title,
        description: video.description,
        year: video.year,
        category: video.category,
        rating: video.rating,
        duration: video.duration,
        src: this.extractUuidFromUrl(video.src),
        poster: this.extractUuidFromUrl(video.poster),
        published: video.published,
      });

      if (video.src) this.loadVideoPreview(video.src);
      if (video.poster) this.loadPosterPreview(video.poster);
    }
  }

  static arrayNotEmpty(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return { required: true };
    }
    return null;
  }

  private loadVideoPreview(value: string | null): void {
    this.videoPreviewUrl = this.mediaService.getMediaUrl(value, 'image');
    this.posterLoading = false;
    this.cdr.detectChanges();
  }

  private loadPosterPreview(value: string | null): void {
    this.posterPreviewUrl = this.mediaService.getMediaUrl(value, 'image');
    this.posterLoading = false;
    this.cdr.detectChanges();
  }

  private extractUuidFromUrl(value: string | undefined | null): string {
    if (!value) return '';

    if (!value.includes('/')) {
      return value;
    }

    const segments = value.split('/');
    return segments[segments.length - 1] || '';
  }

  onVideoFileSelected(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }
    const validVideoExtensions = [
      '.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm', '.m4v', '.3gp', '.mpeg', '.mpg', '.ogg',
    ];
    const filename = file.name.toLowerCase();
    const hasValidExtension = validVideoExtensions.some((ext) => filename.endsWith(ext));
    const hasValidMimeType = file.type.startsWith('video/') || file.type === 'application/octet-stream';

    if (!hasValidExtension && !hasValidMimeType) {
      this.notification.error(
        'Please select a valid video file (MP4, MKV, AVI, MOV, WMV, FLV, WEBM, M4V, 3GP, MPEG, MPG, OGG)'
      );
      return;
    }

    const localBlobUrl = URL.createObjectURL(file);
    this.videoPreviewUrl = localBlobUrl;

    this.extractDurationFromFile(file);
    this.uploadProgress = 0;
    this.mediaService.uploadFile(file).subscribe({
      next: ({ progress, uuid }) => {
        this.uploadProgress = progress;
        if (uuid) {
          this.videoForm.patchValue({ src: uuid });
          this.notification.success('Video uploaded successfully!');
        }
      },
      error: (err: any) => {
        this.notification.error('Failed to upload video. Please try again.');
        this.uploadProgress = 0;
        if (this.videoPreviewUrl === localBlobUrl) {
          URL.revokeObjectURL(localBlobUrl);
          this.videoPreviewUrl = null;
        }
      },
    });
  }

  onPosterPicked(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.notification.error('Please select a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.posterPreviewUrl = reader.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  private extractDurationFromFile(file: File) {
    const videoElement = document.createElement('video');
    videoElement.preload = 'metadata';

    const blobUrl = URL.createObjectURL(file);
    videoElement.src = blobUrl;

    videoElement.onloadedmetadata = () => {
      const duration = isFinite(videoElement.duration) ? Math.round(videoElement.duration) : 0;
      this.videoForm.patchValue({ duration: duration });
      URL.revokeObjectURL(blobUrl);
    };

    videoElement.onerror = (e) => {
      console.error('Error loading video metadata:', e);
      URL.revokeObjectURL(blobUrl);
    };
  }

  onSave() {
    this.isSaving = true;
    const videoData = this.videoForm.value;

    const op$ = this.isEditMode
      ? this.videoService.updateVideoByAdmin(this.data.video.id, videoData)
      : this.videoService.createVideoByAdmin(videoData);

    op$.subscribe({
      next: (response: any) => {
        this.isSaving = false;
        this.notification.success(
          response?.message ||
            (this.isEditMode ? 'Video updated successfully!' : 'Video created successfully!')
        );
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.notification.error(err?.error?.message || 'Failed to save video. Please try again.');
        this.isSaving = false;
      },
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  removeVideo() {
    if (this.videoPreviewUrl && this.videoPreviewUrl.toString().startsWith('blob:')) {
      URL.revokeObjectURL(this.videoPreviewUrl.toString());
    }
    this.videoPreviewUrl = null;
    this.videoForm.patchValue({ src: '', duration: 0 });
    this.uploadProgress = 0;
  }

  removePoster() {
    if (this.posterPreviewUrl && this.posterPreviewUrl.toString().startsWith('blob:')) {
      URL.revokeObjectURL(this.posterPreviewUrl.toString());
    }
    this.posterPreviewUrl = null;
    this.videoForm.patchValue({ poster: '' });
    this.posterProgress = 0;
  }
}
