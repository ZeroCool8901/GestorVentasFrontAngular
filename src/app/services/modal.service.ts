import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../Models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
titulo=""
cliente:any
accion = new BehaviorSubject("")

  constructor() { }
}
