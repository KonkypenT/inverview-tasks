import { Injectable } from '@angular/core';
import { NotificationServiceInterface } from './notification-service.interface';

@Injectable()
export class PopupNotificationService implements NotificationServiceInterface {
  public notify(message: string): void {
    alert(`Popup Notification: ${message}`);
  }
}
