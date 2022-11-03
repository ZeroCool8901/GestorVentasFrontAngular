import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    role: [null, Validators.required],
    state: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, public service: ApiService) {}

  onSubmit(): void {
    const User = {
      name: this.addressForm.get('firstName')?.value,
      lastName: this.addressForm.get('lastName')?.value,
      rol: this.addressForm.get('role')?.value,
      state: this.addressForm.get('state')?.value,
      email: this.addressForm.get('email')?.value,
      password: this.addressForm.get('password')?.value
    }

    if (this.addressForm.valid) {
      this.service.Post('Users', User);
      Swal.fire({
        title: "Registro realizado",
        position: 'center',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        title: "FALLIDO",
        position: 'center',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
