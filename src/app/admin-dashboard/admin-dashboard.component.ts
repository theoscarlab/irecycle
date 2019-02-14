import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { AdminService } from "../services/admin.service";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: any = {}
  totalUsers: number = 0
  totalTransactions: number = 0
  totalOrders: number = 0
  totalBalance: number = 0
  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    if (!this.usrServ.isUserManage()) {
      this.usrServ.goTo("/dashboard")
    }

    this.admServ.allUser().subscribe((res: Array<any>) => {
      this.totalUsers = res.length      
    })

    this.admServ.allTransactions().subscribe((res: Array<any>) => {
      this.totalTransactions = res.length
      let active = res.filter(e => e.plan !== "balance" && e.status === "Active").length
      let cancelled = res.filter(e => e.plan !== "balance" && e.status === "Declined").length
      let completed = res.filter(e => e.plan !== "balance" && e.status === "Completed").length
      this.totalBalance = res.filter(e => e.plan === "balance").length
      this.totalOrders = res.filter(e => e.plan !== "balance" && e.status !== "Declined").length
      
      chart({
        type: 'bar',
        data: {
          labels: ["Active", "Declined", "Completed", "Balance"],
          datasets: [{
            label: 'transactions',
            data: [active, cancelled, completed,this.totalBalance],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              /* 'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)' */
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              /* 'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)' */
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    })


  }

}
