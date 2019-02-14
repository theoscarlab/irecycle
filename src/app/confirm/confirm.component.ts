import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import * as $ from "jquery";

@Component({
  selector: 'app-rules',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  url: any;
  code: any;
  error: boolean = false

  constructor(
    private usrServ: UsersService
  ) { }

  ngOnInit() {
    /*  $("html").attr("style", "background-color: #fedb00;")
     $("body").attr("style", "background-color: #fedb00!important;") */
    this.url = new URL(location.href);
    this.code = this.url.searchParams.get("code") ? this.url.searchParams.get("code") : false

    if (this.code) {
      this.usrServ.checkCode({ code: this.code }).subscribe(res => {
        //console.log(res)
        setTimeout(() => {          
          this.usrServ.goTo("/dashboard")
        }, 4000);
      }, error => {
        //console.log(error)
        this.error = true
        console.log(error)
      });
    }
  }

}
