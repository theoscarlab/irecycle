import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { AdminService } from "../services/admin.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  user: any = {}
  itemToCreate: any = {}
  all: Array<any> = []
  purchases: number = 0
  balance: number = 0
  amountToPut: number = 0
  showMessage: string = ""
  isManager: boolean = false
  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    this.getTransactions()    
  }

  showMessageAction(message) {
    this.showMessage = message

    setTimeout(() => {
      this.showMessage = ""
    }, 4000);
  }

  creditCard() {
    authorizingPayment = (responseData) => {
      let data = {
        "id": this.user && this.user._id ? this.user._id : "none",
        "email": this.user && this.user.email ? this.user.email : "none@gmail.com",
        "value": this.amountToPut,
        "plan": "balance",
        "currency": "AED",
        "cardToken": responseData.cardToken,
      }
      this.usrServ.authorizingPayment(data).subscribe(response => {
        console.log(response)
        if (response.status !== 'Declined') {
          //this.showMessageAction(response.responseMessage)
        } else {
          this.showMessageAction(response.responseMessage)
        }
      })
    }
    if (this.user) {
      this.usrServ.creditCard(this.user.email, this.amountToPut)
    }
  }

  invalidAmunt() {
    return this.amountToPut <= 0
  }

  toRemove(item) {
    this.admServ.removeTransaction(item).subscribe((res) => {
      this.getTransactions()
    })
  }

  getTransactions() {
    if (!this.usrServ.isUserManage()) {      
      this.usrServ.transactions().subscribe(res => {
        this.all = res
        this.all.forEach(e => {
          if (e.status !== "Declined" && e.plan !== "balance") {
            this.purchases += +e.price
          }
          if (e.status !== "Declined" && e.plan === "balance") {
            this.balance += +e.price
          }
        })
      })
    } else {
      this.emptyTransaction()
      this.isManager = true
      this.admServ.allTransactions().subscribe((res: Array<any>) => {
        this.all = res
        this.all.forEach(e => {
          if (e.status !== "Declined" && e.plan !== "balance") {
            this.purchases += +e.price
          }
          if (e.status !== "Declined" && e.plan === "balance") {
            this.balance += +e.price
          }
        })
      })
    }
  }

  emptyTransaction() {
    this.itemToCreate = JSON.stringify(
      {
        userId: "",
        plan: "",
        price: "",
        email: "",
        coin: "AED",
        userAddress: "",
        amountPaid: "",
        card: {},
        data: {},
        status: "Active"
      },undefined, 4
    )
  }

  createTransaction(){
    this.admServ.createTransaction(JSON.parse(this.itemToCreate) ).subscribe((res) => {
      this.getTransactions()
    })
  }

  validJson(){
    try {
      JSON.parse(this.itemToCreate) 
      return true 
    } catch (error) {
      console.log(error)
      return false
    }
  }


}
