import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent {
  addressForm = this.fb.group({
    nombre: [null, Validators.required],
    precio: [null, Validators.required],
    marca: [null, Validators.required],
    cantidad: [null, Validators.required],
    serial: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
