import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from "../services/users.service";
/* import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty'; */
import * as $ from "jquery";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  credentials: any = {
    email: '',
    password: '',
    password2: '',
    code: ''
  };

  sent: boolean = false;
  emailBlur: boolean = false;

  sentPass: boolean = false;
  url: any;
  code: any;
  success: boolean = false;

  constructor(
    private usrServ: UsersService,
    private router: Router,/* 
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig */
  ) { }

  ngOnInit() {   
    this.url = new URL(location.href);
    this.code = this.url.searchParams.get("code") ? this.url.searchParams.get("code") : false
    this.credentials.code = this.code
    //this.isCodeValid(this.code)
  }

  sendEmail() {
    if(this.validEmail(this.credentials.email)){
      this.usrServ.resetPassEmail(this.credentials).subscribe(res => {
        // this.router.navigate(['']);
        if (res.success) {      
          this.sent = true
          /* let toastOptions: ToastOptions = {
            title: "Recover email sent",
            msg: "Awesome, we have sent an email to the address you provided",
            showClose: true,
            timeout: 5000,
            theme: 'default'
          };
          this.toastyService.info(toastOptions); */
          this.success = true
        }else{
          /* let toastOptions: ToastOptions = {
            title: "Invalid email",
            msg: "Please make sure you use the right email for this system",
            showClose: true,
            timeout: 5000,
            theme: 'default'
          };
          this.toastyService.warning(toastOptions); */
          console.error("Please make sure you use the right email for this system");
          
        }
      }, error => {
        console.error(error);
        
        /* let toastOptions: ToastOptions = {
          title: "Send email error",
          msg: "There was an error please try later",
          showClose: true,
          timeout: 5000,
          theme: 'default'
        };
        this.toastyService.error(toastOptions); */
      });
    }    
  }

  change() {    
    //if(this.credentials.password.length >= 6 ){
      if(this.credentials.password === this.credentials.password2){
        this.usrServ.changePassCode(this.credentials).subscribe(res => {
          console.log(res)
          if (res.success) {      
            this.sentPass = true
            
            this.success = true
            setTimeout(ste=>{
              console.log("redirect")
              this.router.navigate(['/login']);
            },6000)
          }else {
            setTimeout(ste=>{
              console.log("redirect")
              this.router.navigate(['/login']);
            },6000)
          }
        }, error => {
          /* let toastOptions: ToastOptions = {
            title: "Change password error",
            msg: "There was an error please try later",
            showClose: true,
            timeout: 5000,
            theme: 'default'
          };
          this.toastyService.error(toastOptions); */
        });
      }else{
        /* let toastOptions: ToastOptions = {
          title: "Password validations",
          msg: "Passwords must match",
          showClose: true,
          timeout: 5000,
          theme: 'default'
        };
        this.toastyService.warning(toastOptions); */
      }
    //}else{
      /* let toastOptions: ToastOptions = {
        title: "Password validations",
        msg: "Your password must be at least 6 characters",
        showClose: true,
        timeout: 5000,
        theme: 'default'
      };
      this.toastyService.warning(toastOptions); */
    //}
  }

  
 validEmail(email){
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email)
  }

  /* isCodeValid(code){
    this.usrServ.isCodeValid({code:code}).subscribe(res => {      
      if (res.success) {      
        
      }else{
        let toastOptions: ToastOptions = {
          title: "Invalid access code ",
          msg: "Please make sure you copy all the link",
          showClose: true,
          timeout: 5000,
          theme: 'default'
        };
        this.toastyService.warning(toastOptions);
        setTimeout(time=>{
          this.router.navigate(['/login']);
        },3000)
      }
    }, error => {
      
    });
  } */
}
