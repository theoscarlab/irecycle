import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { AdminService } from "../services/admin.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  user: any = {}
  notifications: Array<any> = []
  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
    ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    this.getNotifications()
  }

  goTo(item) {
    if (item.transactionId)
      this.usrServ.goToWithParam("/orderManagement", item.transactionId)
  }

  openNotification(item) {
    this.usrServ.openNotification(item).subscribe(res => {
      this.getNotifications()
    })
  }
  closeNotification(item) {
    this.usrServ.closeNotification(item).subscribe(res => {
      this.getNotifications()
    })
  }
  getNotifications() {
    if (this.usrServ.isUserManage()) {
      this.admServ.notificationByIDNoAdmin().subscribe(res => {
        this.notifications = res
      })
    } else {
      this.usrServ.notificationByIDAdmin().subscribe(res => {
        this.notifications = res
      })
    }
  }

}
