import { Injectable } from '@angular/core';
import { NotificationServiceInterface } from './notification-service.interface';

@Injectable()
export class ConsoleNotificationService implements NotificationServiceInterface {
  public notify(message: string): void {
    console.log(`Console Notification: ${message}`);
  }
}
