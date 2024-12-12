import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormArrayComponent } from './test-1/form-array/form-array.component';
import { DiComponent } from './test-2/di/di.component';

@Component({
  selector: 'app-root',
  template: `<app-form-array />`,
  // template: `<app-di />`,
  imports: [FormArrayComponent, DiComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
