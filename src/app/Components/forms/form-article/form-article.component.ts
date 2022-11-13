import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

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

  title = ""

  constructor(private fb: FormBuilder, public service: ApiService, public modalservice: ModalService) {}

  ngOnInit(): void {
    this.modalservice.accion.subscribe((res)=>{
      this.title = res;
      if (res== 'editar') {
        this.addressForm.controls['nombre'].setValue(this.modalservice.articulo.name)
        this.addressForm.controls['precio'].setValue(this.modalservice.articulo.price)
        this.addressForm.controls['marca'].setValue(this.modalservice.articulo.brand)
        this.addressForm.controls['cantidad'].setValue(this.modalservice.articulo.cant)
        this.addressForm.controls['serial'].setValue(this.modalservice.articulo.serialNumber)     
      }
     }) 

  }

  onSubmit(): void {
    if(this.modalservice.accion.value=="crear"){
      if(this.addressForm.valid){
        const article = {
          name: this.addressForm.get('nombre')?.value,
          price: this.addressForm.get('precio')?.value,
          brand: this.addressForm.get('marca')?.value,
          cant: this.addressForm.get('cantidad')?.value,
          serialNumber: this.addressForm.get('serial')?.value
          
        }
        this.service.Post("Articles", article)

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
        const article = {
          name: this.addressForm.get('nombre')?.value,
          price: this.addressForm.get('precio')?.value,
          brand: this.addressForm.get('marca')?.value,
          cant: this.addressForm.get('cantidad')?.value,
          serialNumber: this.addressForm.get('serial')?.value
          
        }
        
        this.service.Put("Articles", article, this.modalservice.articulo.IdArticle)
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
