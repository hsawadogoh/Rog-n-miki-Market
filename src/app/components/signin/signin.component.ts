import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Login} from '../../model/login.model';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SessionStorageService]
})
export class SigninComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  login: Login;

  constructor(
      private loginService: LoginService
  ) { }

  ngOnInit() {
    this.login = new Login();
    this.login.rememberMe = false;
    console.log(this.login);
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  onSignin() {
    console.log(this.login);
    this.loginService.login(this.login).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
    );
  }
}
