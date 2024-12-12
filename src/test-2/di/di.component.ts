// Задача: 
// Реализовать кастомный сервис с использованием Dependency Injection
// У тебя есть приложение, которое должно отображать уведомления разными способами 
// (например, через консоль или всплывающее окно). Ты должен использовать Dependency Injection (DI) 
// для подмены способа отображения уведомлений, не изменяя основной код.

// Требования:
// 1. Создай интерфейс NotificationServiceInterface с методом notify(message: string).
// 2. Реализуй два сервиса:
//    ConsoleNotificationService (вывод сообщений в консоль).
//    PopupNotificationService (всплывающее окно с сообщением).
// 3. Используй DI, чтобы можно было легко переключать между реализациями.
// 4. Сделай так, чтобы текущая реализация выбиралась через useClass в провайдере Angular.

import { Component } from '@angular/core';

@Component({
  selector: 'app-di',
  imports: [],
  template: `
    <button (click)="sendNotification()">Отправить уведомление</button>
  `,
  standalone: true,
})
export class DiComponent {
  public sendNotification(): void {
  }
}
