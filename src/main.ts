import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormArrayComponent } from './test-1/form-array/form-array.component';

@Component({
  selector: 'app-root',
  template: `<app-form-array />`,
  imports: [FormArrayComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
