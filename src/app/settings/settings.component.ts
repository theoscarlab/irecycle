import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: any = {}
  pass: string = ""
  pass2: string = ""
  firstNameBlur: boolean = false
  lastNameBlur: boolean = false
  passBlur: boolean = false
  constructor(
    private usrServ: UsersService,
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
  }

  validEmail(email) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email)
  }

  update() {
    let data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      password: this.pass
    }

    this.usrServ.updateUser(data).subscribe(res => {
      this.usrServ.status().subscribe(res => {
        this.user = this.usrServ.ifInvalidUserToLogin()
      })
    })
    if (this.pass !== "") {
      this.usrServ.changePass(data).subscribe(res => {
        console.log(res)
      })
    }
  }

}
