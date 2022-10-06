import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modaltemplate',
  templateUrl: './modaltemplate.component.html',
  styleUrls: ['./modaltemplate.component.css']
})
export class ModaltemplateComponent implements OnInit {

  constructor(public modalservice: ModalService) { }
titulo=""
  ngOnInit(): void {
    this.titulo=this.modalservice.titulo
  }

}
