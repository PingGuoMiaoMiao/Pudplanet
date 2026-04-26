import { Component } from '@angular/core';
import { DialogService } from '../../shared/services/dialog-service';

@Component({
  selector: 'app-admin-video-list',
  standalone: false,
  templateUrl: './video-list.html',
  styleUrl: './video-list.css',
})
export class VideoList {
  constructor(
    private dialogService: DialogService,
  ) {}

  createNew() {
    const dialogRef = this.dialogService.openVideoFormDialog('create');
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        // Video was created, the shared video-list component will reload
      }
    });
  }
}
