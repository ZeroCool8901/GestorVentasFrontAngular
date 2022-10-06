import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup(
    {
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),   
    }

    )

    submit() {
      if (this.form.valid) {
        this.submitEM.emit(this.form.value);
        
      }
      
    }

    @Input() error: string | null | undefined;

    @Output() submitEM = new EventEmitter();
   

}
