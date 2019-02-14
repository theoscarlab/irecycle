import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from "../services/users.service";
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  credentials: any = {
    email: '',
    password: ''
  };

  loginTextButton: string = "Login"
  showMessage: string = ""
  confEmailNeeded: boolean = false
  emailBlur: boolean = false;
  captcha: boolean = false;

  constructor(
    private usrServ: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    //background-color: #fedb00;    
    this.user = this.usrServ.ifValidUserToMain()

    recaptchaCallback = () => {
      this.captcha = true
      console.log("done", this.captcha)
      $("#email").focus()
    }
    this.usrServ.initMeta()
  }

  login() {
    this.loginTextButton = "Loading"
    this.usrServ.login(this.credentials).subscribe(res => {
      this.loginTextButton = "Login"
      //$("html").attr("style", "")
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error)
      this.loginTextButton = "Login"

      this.showMessage = error.error.message

      setTimeout(() => {
        this.showMessage = ""
      }, 4000);

      if (error.error.message === 'Confirmation email needed') {
        //this.confEmailNeeded = true
      }

    });
  }

  sendVerificationEmail() {
    this.usrServ.sendVerificationEmail(this.credentials).subscribe(res => {

    }, error => {
      // console.log(error)      
    });
  }

  validEmail(email) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email)
  }
}
