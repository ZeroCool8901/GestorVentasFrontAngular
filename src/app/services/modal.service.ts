import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../Models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
titulo=""
cliente:any
articulo:any
servicio:any
venta:any
cuentabanco:any
accion = new BehaviorSubject("")

  constructor() { }
}
