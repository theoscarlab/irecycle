import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { AdminService } from "../services/admin.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user: any = {}
  cancelled: Array<any> = []
  completed: Array<any> = []
  active: Array<any> = []
  all: Array<any> = []
  users: Array<any> = []
  activeTable: Array<any> = []
  completedOrders: number = 0
  activeOrders: number = 0
  plastic: number = 0
  metal: number = 0
  paper: number = 0
  glass: number = 0
  BuildingNo: number = 0
  Zone: number = 0
  Street: number = 0
  isDriver: boolean = false

  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    if (!this.usrServ.isUserManage()) {
      if (this.user.order) {
        this.plastic = this.user.order.plastic
        this.metal = this.user.order.metal
        this.glass = this.user.order.glass
        this.paper = this.user.order.paper
        this.BuildingNo = this.user.order.BuildingNo
        this.Zone = this.user.order.Zone
        this.Street = this.user.order.Street
      }
    } else {

    }
    if (this.usrServ.isUserDriver()) {
      this.isDriver = true
      this.admServ.allUser().subscribe(res => {
        this.users = res.filter(e => e.order)
      })
    }

  }

  setActiveTo(value) {
    this.activeTable = value === "all" ? this.all :
      value === "cancelled" ? this.cancelled :
        value === "active" ? this.active :
          value === "completed" ? this.completed : []
  }

  goToOrder(item) {
    if (item.status === "Active")
      this.usrServ.goToWithParam("/orderManagement", item._id)
  }

  findMap() {
    this.usrServ.map({}).subscribe(res => {
      res = JSON.parse(res)
      map(res.features[0].geometry.x, res.features[0].geometry.y)
    })
  }

  createOrder() {
    this.usrServ.createOrder({
      plastic: this.plastic,
      metal: this.metal,
      paper: this.paper,
      glass: this.glass,
      BuildingNo: this.BuildingNo,
      Zone: this.Zone,
      Street: this.Street,
      date: new Date(),
      possiblePoints: (this.metal * 10) + (this.plastic * 8) + (this.paper * 6) + (this.glass * 4)
    }).subscribe(res => {
      this.usrServ.status().subscribe(res => {
        this.user = this.usrServ.ifInvalidUserToLogin()
      })
    })
  }

  completedOrder(item) {
    this.usrServ.completedOrder(item).subscribe(res => {
      this.admServ.allUser().subscribe(res => {
        this.users = res.filter(e => e.order)
      })
    })
  }

}
