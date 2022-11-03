import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.css']
})
export class FormServiceComponent {
  addressForm = this.fb.group({
    tipo: [null, Validators.required],
    estado: [null, Validators.required]
  });

  hasUnitNumber = false;

  
  constructor(private fb: FormBuilder, public service: ApiService) {}

  onSubmit(): void {
    const Service = {
      name: this.addressForm.get('nombre')?.value,
      price: this.addressForm.get('precio')?.value,
      brand: this.addressForm.get('marca')?.value,
      cant: this.addressForm.get('cantidad')?.value,
      serialNumber: this.addressForm.get('serial')?.value,

    }

    if (this.addressForm.valid) {
      this.service.Post('Services', Service);
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
