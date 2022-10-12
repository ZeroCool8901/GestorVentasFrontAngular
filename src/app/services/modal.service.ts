import { Injectable } from '@angular/core';
import { Cliente } from '../Models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
titulo=""
cliente:Cliente
  constructor() { }
}
