import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent {
    states: any;
    addressForm = this.fb.group({
    society: null,
    count: [null, Validators.required, Validators.minLength(7),Validators.maxLength(8)],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    documentType: [null, Validators.required],
    document: [null, Validators.required],
    city: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required],
    email: [null, Validators.required],    
  });

  hasUnitNumber = false;

  documentType = [
    {name: 'Cédula', abbreviation: 'CC'},
    {name: 'Cédula Extranjera', abbreviation: 'CE'},
    {name: 'NIT (Sin digito de verificación)', abbreviation: 'NIT'}
  ];
  
  society = [
  {name: 'Vanti S.A ESP', abbreviation: 'GN'},
    {name: 'Gas Natural Cundiboyacense S.A ESP', abbreviation: 'GNCB'},
    {name: 'Gas Natural del Oriente S.A ESP', abbreviation: 'GOR'},
    {name: 'Gas Natural del Cesar S.A ESP', abbreviation: 'GNC'}
  ];

  constructor(private fb: FormBuilder, public router: Router) {}

  redirectListClient(){
    this.router.navigate(['/Cliente'])
  }
  
  onSubmit(): void {
    alert('Thanks!');
  }
}
