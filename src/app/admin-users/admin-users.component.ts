import { Component, OnInit } from '@angular/core';
import { AdminService } from "../services/admin.service";
import { UsersService } from "../services/users.service";


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  user: any = {}
  amountToPut: number = 0
  showMessage: boolean = false
  users: Array<any> = []
  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    if (!this.usrServ.isUserManage()) {
      this.usrServ.goTo("/dashboard")
    }
    this.admServ.allUser().subscribe(res => {
      this.users = res
    })

  }

  toAdmin(item) {
    this.admServ.toAdmin(item).subscribe(res => {
      this.admServ.allUser().subscribe(res => {
        this.users = res
      })
    })
  }

  toAceptEmailVerification(item) {
    this.admServ.toAceptEmailVerification(item).subscribe(res => {
      this.admServ.allUser().subscribe(res => {
        this.users = res
      })
    })
  }

}
