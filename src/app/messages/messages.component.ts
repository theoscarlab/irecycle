import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { AdminService } from "../services/admin.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Array<any> = []
  user: any = {}
  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    this.getMessages()
  }

  goTo(item) {
    if (item.transactionId)
      this.usrServ.goToWithParam("/orderManagement", item.transactionId)
  }

  openMessage(item) {
    this.usrServ.openMessage(item).subscribe(res => {
      this.getMessages()
    })
  }
  closeMessage(item) {
    this.usrServ.closeMessage(item).subscribe(res => {
      this.getMessages()
    })
  }
  getMessages() {
    if (this.usrServ.isUserManage()) {
      this.admServ.messageByIDNoAdmin().subscribe(res => {
        this.messages = res
      })
    } else {
      this.usrServ.messageByIDAdmin().subscribe(res => {
        this.messages = res
      })
    }
  }

}
