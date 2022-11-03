import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor(public loginservice: LoginService) {
  
  }

  Login = '';

  ngOnInit(): void {
    console.log(this.Login)
    if (this.loginservice.user != null) {
      this.loginservice.login.next('login')
    } else {
      this.loginservice.login.next('logout')
      this.loginservice.user.next(null)
    }
    this.loginservice.login.subscribe((value => {
      this.Login = value
    }))

  }



}