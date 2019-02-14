import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any = {}
  orders: number = 0
  transactions: number = 0
  balance: number = 0
  purchases: number = 0
  constructor(
    private usrServ: UsersService,
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    if (this.usrServ.isUserManage()) {
      this.usrServ.goTo("/adminDashboard")
    } else {
      this.usrServ.transactions().subscribe(res => {
        this.orders = res.filter(e => e.plan !== "balance" && e.status === "Active").length
        res.forEach(e => {
          if (e.status !== "Declined" && e.plan !== "balance") {
            this.purchases += +e.price
          }
          if (e.status !== "Declined" && e.plan === "balance") {
            this.balance += +e.price
          }
        })
        this.transactions = res.length
      })
    }
  }

}
