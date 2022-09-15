import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent{
  constructor(public router: Router){}


  redirectUser() {
    this.router.navigate(['/Formulario'])
  }

}






