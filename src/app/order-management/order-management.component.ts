import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {

  orderID: string = ""
  feedback: string = ""
  rating: number = 5
  requirements: string = ""
  showRequirements: boolean = true
  message: string = ""
  user: any = {}
  order: any = {}
  plan: any = { id: "" }
  messages: Array<any> = []
  starArray: Array<any> = []
  emptyStarArray: Array<any> = []
  serv: any = {}
  constructor(
    private usrServ: UsersService,
    private route: ActivatedRoute,
  ) {
    this.serv = usrServ
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderID = params['id'];
      this.usrServ.transactionByID({ _id: this.orderID }).subscribe(res => {
        this.order = res
        this.updateOrder()
        this.usrServ.planID({ id: res.plan }).subscribe(plan => {
          this.plan = plan[0]
        })
        this.usrServ.messagesByTransaction({ id: this.order._id }).subscribe(res => {
          this.messages = res
        })
      })
    });
    this.user = JSON.parse(this.usrServ.getSession('user'));
    
    this.usrServ.onMessage().subscribe(to => {
      this.usrServ.messagesByTransaction({ id: this.order._id }).subscribe(res => {
        this.messages = res
      })      
    })
  }

  goToPlanPage() {
    this.usrServ.goToWithParam("/plan", this.plan.id)
  }

  saveRequirements() {
    this.usrServ.orderRequirements({ _id: this.order._id, "requirements": this.requirements }).subscribe(res => {
      this.order = res
      this.updateOrder()
    })
    this.sendNotification("Requirements saved")
  }

  requirementsAcepted() {
    this.usrServ.requirementsAcepted({ _id: this.order._id }).subscribe(res => {
      this.order = res
      this.updateOrder()
    })
    this.sendNotification("Requirements Acepted")
  }

  orderCompleted() {
    this.usrServ.orderCompleted({ _id: this.order._id }).subscribe(res => {
      this.order = res
      this.updateOrder()
    })
    this.sendNotification("Order Completed")
  }

  rateOrder() {
    this.usrServ.rateOrder({ _id: this.order._id, rating: this.rating, feedback: this.feedback }).subscribe(res => {
      this.order = res
      this.updateOrder()
    })
    this.sendNotification("Rate Order Completed")
  }

  sendMessage() {
    let toUser = this.usrServ.isUserManage() ? this.order.userId : this.user._id
    let data = {
      userId: toUser,
      fromName: this.user.firstName,
      transactionId: this.order._id,
      text: this.message,
      isAdmin: this.usrServ.isUserManage()
    }
    this.usrServ.sendMessage(data).subscribe(res => {
      this.usrServ.send(toUser)
      this.usrServ.messagesByTransaction({ id: this.order._id }).subscribe(res => {
        this.messages = res
        this.message = ""
      })
    })
  }

  sendNotification(message: string) {
    let toUser = this.usrServ.isUserManage() ? this.order.userId : this.user._id
    let data = {
      userId: toUser,
      fromName: this.user.firstName,
      transactionId: this.order._id,
      text: message,
      isAdmin: this.usrServ.isUserManage()
    }
    this.usrServ.sendNotification(data).subscribe(console.log)
  }

  setShowReq(view) {
    this.showRequirements = view
  }

  updateOrder() {
    if (this.order.order && this.order.order.requirements) {
      this.requirements = this.order.order.requirements
    }
    if (this.order.order && this.order.order.requirementsAcepted) {
      this.showRequirements = false
    }
    if (this.order.order && this.order.order.rating !== 0) {
      this.rating = this.order.order.rating
      this.feedback = this.order.order.feedback
      this.starArray = Array.from(Array(this.order.order.rating)).map((x, i) => i)
      this.emptyStarArray = Array.from(Array(5 - this.order.order.rating)).map((x, i) => i)
    }
  }
}
