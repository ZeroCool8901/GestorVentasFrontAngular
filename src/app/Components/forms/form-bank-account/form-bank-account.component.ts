import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-bank-account',
  templateUrl: './form-bank-account.component.html',
  styleUrls: ['./form-bank-account.component.css']
})
export class FormBankAccountComponent {
  addressForm = this.fb.group({
    banco: [null, Validators.required],
    numero: [null, Validators.required],
    tipocuenta: [null, Validators.required],
    idcontratista: [null, Validators.required]
  });

  hasUnitNumber = false;


  tipocuenta = [
    { name: 'Cuenta Ahorros', abbreviation: 'Cuenta Ahorros' },
    { name: 'Cuenta Corriente', abbreviation: 'Cuenta Corriente' }
  ];

  title = ""

  constructor(private fb: FormBuilder, public service: ApiService, public modalservice: ModalService) {}

  ngOnInit(): void {

    this.modalservice.accion.subscribe((res) => {
      this.title = res;
      if (res == 'editar') {
        this.addressForm.controls['banco'].setValue(this.modalservice.cuentabanco.name)
        this.addressForm.controls['numero'].setValue(this.modalservice.cuentabanco.number)
        this.addressForm.controls['tipocuenta'].setValue(this.modalservice.cuentabanco.accountType)
        this.addressForm.controls['idcontratista'].setValue(this.modalservice.cuentabanco.idContractor)
      }
    })
  }

  onSubmit(): void {
    if(this.modalservice.accion.value=="crear"){
      if(this.addressForm.valid){
        const BankAccount = {
          name: this.addressForm.get('banco')?.value,
          number: this.addressForm.get('numero')?.value,
          accountType: this.addressForm.get('tipocuenta')?.value,
          idContractor: this.addressForm.get('idcontratista')?.value,
        }
        this.service.Post("BankAccounts", BankAccount)

        Swal.fire({
          title: "Registro realizado",
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          title: "NO SE PUEDE CREAR REGISTRO",
          position: 'center',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }else{
      if(this.addressForm.valid){
        const BankAccount = {
          name: this.addressForm.get('banco')?.value,
          number: this.addressForm.get('numero')?.value,
          accountType: this.addressForm.get('tipocuenta')?.value,
          idContractor: this.addressForm.get('idcontratista')?.value,
        }
        
        this.service.Put("BankAccounts", BankAccount, this.modalservice.cuentabanco.idBankAccount)
        Swal.fire({
          title: "Registro editado",
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          title: "NO SE PUDO EDITAR",
          position: 'center',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    window.location.reload()
  }
}
