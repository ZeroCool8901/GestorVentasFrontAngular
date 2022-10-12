import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';
import { ClienteComponent } from '../../cliente/cliente.component';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
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
    { name: 'Cédula', abbreviation: 'CC' },
    { name: 'Cédula Extranjera', abbreviation: 'CE' },
    { name: 'NIT (Sin digito de verificación)', abbreviation: 'NIT' }
  ];

  constructor(private fb: FormBuilder, public router: Router, public service: ApiService,  public modalservice: ModalService) { }
  ngOnInit(): void {
   if (this.modalservice.cliente!=null) {
    this.addressForm.setControl["firstName"]=this.modalservice.cliente.name;
   }
  }

  redirectListClient() {
    this.router.navigate(['/Cliente'])
  }

  onSubmit(): void {
    const Client = {
      name: this.addressForm.get('firstName')?.value,
      lastName: this.addressForm.get('lastName')?.value,
      address: this.addressForm.get('address')?.value,
      cel: this.addressForm.get('phone')?.value,
      identificationType: this.addressForm.get('documentType')?.value,
      identificationNumber: this.addressForm.get('document')?.value,

    }

    if (this.addressForm.valid) {
      this.service.Post('Clients', Client);
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
