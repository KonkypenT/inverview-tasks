// Динамическое управление полями формы с использованием FormArray
// У тебя есть форма для управления списком параметров. Каждая форма состоит из следующих элементов
// parameter: string, condition: string, value: string, кнопка для удаления параметра
// По умолчанию в форме должен быть 1 параметр

// Дополнительные условия: если параметр один, то нужно очистить форму
// Стили уже есть, можно использовать их

import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  UntypedFormArray,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
})
export class FormArrayComponent implements OnInit {
  public form = this.fb.group({
    parameters: new UntypedFormArray([]),
  });

  constructor(private fb: FormBuilder) {}

  public get parametersForm(): FormArray {
    return this.form.get('parameters') as FormArray;
  }

  public ngOnInit(): void {
    this.addParameter();
  }

  public createParameter(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      condition: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  public addParameter(): void {
    this.parametersForm.push(this.createParameter());
  }

  public removeParameter(index: number): void {
    if (this.parametersForm.length > 1) {
      this.parametersForm.removeAt(index);
    } else {
      this.parametersForm.at(0).reset();
    }
  }

  public submitForm(): void {
    console.log(this.form.value.parameters);
  }
}
