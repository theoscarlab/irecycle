import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UsersService } from "../services/users.service";


import * as $ from "jquery";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit { 

  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    news_feed: true,
    referral: ''
  };

  emailBlur: boolean = false;
  captcha: boolean = false;
  signedup: boolean = false;
  joinTextButton: any = "Join"

  constructor(
    private usrServ: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.usrServ.ifValidUserToMain()
    recaptchaCallback = () => {
      this.captcha = true
      console.log("done",this.captcha)
      $("#email").focus()
    }     

    this.route.queryParams
      .subscribe(params => {
        //this.user.referral = params.ref;
        if (params.email) {
          this.usrServ.setSession('email', JSON.stringify(params.email));
        }
      });
    this.user.email = JSON.parse(this.usrServ.getSession('email'));
  }

  signUp() {
    this.joinTextButton = "Loading"
    this.usrServ.signup(this.user).subscribe(res => {
      this.signedup = true;
      this.joinTextButton = "Join"
      console.log(res);
    }, error => {
      // console.log(error)
      this.joinTextButton = "Join"      
    });
  }

  validEmail(email) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email)
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  dataVerifications() {
    return this.validEmail(this.user.email) && this.user.firstName.length >= 3 && this.user.lastName.length >= 3 && this.captcha
  }

}
