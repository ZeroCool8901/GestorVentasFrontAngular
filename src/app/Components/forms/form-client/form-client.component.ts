import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent {
    states: any;
    addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    documentType: [null, Validators.required],
    document: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required]   
  });

  hasUnitNumber = false;

  documentType = [
    {name: 'Cédula', abbreviation: 'CC'},
    {name: 'Cédula Extranjera', abbreviation: 'CE'},
    {name: 'NIT (Sin digito de verificación)', abbreviation: 'NIT'}
  ];

  constructor(private fb: FormBuilder, public router: Router, public service: ApiService) {}

  redirectListClient(){
    this.router.navigate(['/Cliente'])
  }
  

  onSubmit(): void {
    const Client= {
    name: this.addressForm.get('firstName')?.value,
    lastName: this.addressForm.get('lastName')?.value,
    address: this.addressForm.get('address')?.value,
    cel: this.addressForm.get('phone')?.value,
    identificationType: this.addressForm.get('documentType')?.value,
    identificationNumber: this.addressForm.get('document')?.value,

    }
    this.service.Post('Clients', Client);
    Swal.fire({
      title: "Registro realizado",
      confirmButtonText: "Aceptar",
  });


  }

}
