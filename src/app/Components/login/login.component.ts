import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { UsuarioLogin } from '../ModelsView/UsuarioLoginMV.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  em = "";
  pass = "";
  user: UsuarioLogin;

  constructor(
    public router: Router,
    public loginservice: LoginService,
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup(
    {
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    }

  )

  async submit() {
    this.em = this.form.controls['username'].value;
    this.pass = this.form.controls['password'].value;

    var DataResponse: UsuarioLogin = await (this.api.login('Users', this.em, this.pass))
    this.user = DataResponse[0];

    if (this.em == this.user.email && this.pass == this.user.password) {
      Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Logueo Exitoso'
      })
      this.router.navigateByUrl('cliente');
      this.loginservice.user.next(this.user);
      this.loginservice.login.next('login');

    }

    if (this.form.valid) {
      this.submitEM.emit(this.form.value);

    }

  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();


}
