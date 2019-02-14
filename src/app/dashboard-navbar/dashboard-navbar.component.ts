import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { AdminService } from "../services/admin.service";



@Component({
  selector: 'dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {

  messages: Array<any> = []
  notifications: Array<any> = []
  user: any = {}
  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    this.getMessagesAndNotifications()
    this.usrServ.onMessage().subscribe(to => {
      //console.log("message", to)
      this.getMessagesAndNotifications()
    })
  }

  logout() {
    //event.preventDefault();
    this.usrServ.removeSession('user');
    //this.router.navigate(['/login']);
    location.href = '/login'
  }

  getMessagesAndNotifications() {
    if (this.usrServ.isUserManage()) {
      this.admServ.messageByIDNoAdmin().subscribe(res => {
        this.messages = res.filter(e => !e.read)
      })
      this.admServ.notificationByIDNoAdmin().subscribe(res => {
        this.notifications = res.filter(e => !e.read)
      })
    } else {
      this.usrServ.messageByIDAdmin().subscribe(res => {
        this.messages = res.filter(e => !e.read)
      })
      this.usrServ.notificationByIDAdmin().subscribe(res => {
        this.notifications = res.filter(e => !e.read)
      })
    }
  }

}
