import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.css']
})
export class FormSaleComponent {
  addressForm = this.fb.group({
    cuenta: [null, Validators.required],
    fecha: [null, Validators.required],
    precio: [null, Validators.required],
    approved: [null, Validators.required],
    idcontratista: [null, Validators.required],
    idservicio: [null, Validators.required],
    idartefacto: [null, Validators.required],
    idcliente: [null, Validators.required]
  });

  hasUnitNumber = false;
 
  title = ""

  constructor(private fb: FormBuilder, public router: Router, public service: ApiService,  public modalservice: ModalService) {}

  ngOnInit(): void {

    this.modalservice.accion.subscribe((res)=>{
      this.title = res;
      if (res== 'editar') {
        this.addressForm.controls['cuenta'].setValue(this.modalservice.venta.code)
        this.addressForm.controls['fecha'].setValue(this.modalservice.venta.date)
        this.addressForm.controls['precio'].setValue(this.modalservice.venta.price)
        this.addressForm.controls['approved'].setValue(this.modalservice.venta.approved)
        this.addressForm.controls['idcontratista'].setValue(this.modalservice.venta.idContractor)
        this.addressForm.controls['idservicio'].setValue(this.modalservice.venta.idService)     
        this.addressForm.controls['idartefacto'].setValue(this.modalservice.venta.idArticle)     
        this.addressForm.controls['idcliente'].setValue(this.modalservice.venta.idClient)     
      }
     }) 
  }

  onSubmit(): void {
    if(this.modalservice.accion.value=="crear"){
      if(this.addressForm.valid){
        const Sale = {
          code: this.addressForm.get('cuenta')?.value,
          date: this.addressForm.get('fecha')?.value, 
          price: this.addressForm.get('precio')?.value,
          approved: this.addressForm.get('approved')?.value,
          idContractor: this.addressForm.get('idcontratista')?.value, 
          idService: this.addressForm.get('idservicio')?.value,  
          idArticle: this.addressForm.get('idartefacto')?.value,
          idClient: this.addressForm.get('idcliente')?.value,
        }
        this.service.Post("Sales", Sale)

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
        const Sale = {
          code: this.addressForm.get('cuenta')?.value,
          date: this.addressForm.get('fecha')?.value, 
          price: this.addressForm.get('precio')?.value,
          approved: this.addressForm.get('approved')?.value, 
          idContractor: this.addressForm.get('idcontratist')?.value,
          idService: this.addressForm.get('idservicio')?.value,  
          idArticle: this.addressForm.get('idartefacto')?.value,
          idClient: this.addressForm.get('idcliente')?.value,
        }
        
        this.service.Put("Sales", Sale, this.modalservice.venta.idSale)
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
