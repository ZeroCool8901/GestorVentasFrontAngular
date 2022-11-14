import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
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

  estado = [
    { name: 'Activo', abbreviation: 1 },
    { name: 'Inactivo', abbreviation: 0 }
  ];

  title = ""

  constructor(private fb: FormBuilder, public service: ApiService, public modalservice: ModalService) { }

  ngOnInit(): void {

    this.modalservice.accion.subscribe((res) => {
      this.title = res;
      if (res == 'editar') {
        this.addressForm.controls['tipo'].setValue(this.modalservice.servicio.type)
        this.addressForm.controls['estado'].setValue(this.modalservice.servicio.state)
      }
    })
  }


  onSubmit(): void {
    if (this.modalservice.accion.value == "crear") {
      if (this.addressForm.valid) {
        const Servicio = {
          type: this.addressForm.get('tipo')?.value,
          state: Boolean(this.addressForm.get('estado')?.value) 
        }
        this.service.Post("Services", Servicio)

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
    } else {
      if (this.addressForm.valid) {
        const Servicio = {
          idService: this.modalservice.servicio.idService,
          type: this.addressForm.get('tipo')?.value,
          state: Boolean(this.addressForm.get('estado')?.value) 
        }

        this.service.Put("Services", Servicio, this.modalservice.servicio.idService)
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