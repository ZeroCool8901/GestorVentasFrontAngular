import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modaltemplate',
  templateUrl: './modaltemplate.component.html',
  styleUrls: ['./modaltemplate.component.css']
})
export class ModaltemplateComponent implements OnInit {


    states: any;
    addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    documentType: [null, Validators.required],
    document: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required]   
  });

  constructor(public modalservice: ModalService, private fb: FormBuilder, public service: ApiService) { }
titulo=""
  ngOnInit(): void {
    this.titulo=this.modalservice.titulo
  }

  onSubmit(): void {
    
  }

}

