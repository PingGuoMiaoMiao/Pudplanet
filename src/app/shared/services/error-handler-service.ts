import { Injectable } from '@angular/core';
import { NotificationService } from './notification-service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private notificationService: NotificationService) {}

  handle(err: any, fallbackMessage: string) {
    const errorMsg = err.error?.error || err.error?.message || fallbackMessage;
    this.notificationService.error(errorMsg);
    console.error('API Error:', err);
  }
}
