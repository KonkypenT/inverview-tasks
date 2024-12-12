// Динамическое управление полями формы с использованием FormArray
// У тебя есть форма для управления списком параметров. Каждая форма состоит из следующих элементов
// parameter: string, condition: string, value: string, кнопка для удаления параметра
// По умолчанию в форме должен быть 1 параметр

// Дополнительные условия: если параметр один, то нужно очистить форму
// Стили уже есть, можно использовать их

import { Component } from '@angular/core';
import {
  FormBuilder,
  UntypedFormArray,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
  standalone: true
})
export class FormArrayComponent {
  public form = this.fb.group({
    parameters: new UntypedFormArray([]),
  });

  constructor(private fb: FormBuilder) {}
}
