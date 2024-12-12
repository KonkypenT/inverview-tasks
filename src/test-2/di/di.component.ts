import { Component } from '@angular/core';
import { NotificationServiceInterface } from '../services/notification-service.interface';

@Component({
  selector: 'app-di',
  imports: [],
  template: `
    <button (click)="sendNotification()">Отправить уведомление</button>
  `,
  standalone: true 
})
export class DiComponent {
  constructor(private notificationService: NotificationServiceInterface) {}

  public sendNotification(): void {
    this.notificationService.notify('Привет из Angular!');
  }
}
