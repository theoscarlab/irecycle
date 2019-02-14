import { Component, OnInit } from '@angular/core';
import { AdminService } from "../services/admin.service";
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.css']
})
export class AdminPlansComponent implements OnInit {

  user: any = {}
  itemToEdit: any = {}
  plans: Array<any> = []
  showMessage: boolean= false
  constructor(
    private usrServ: UsersService,
    private admServ: AdminService
  ) { }

  ngOnInit() {
    this.user = this.usrServ.ifInvalidUserToLogin()
    if (!this.usrServ.isUserManage()) {
      this.usrServ.goTo("/dashboard")
    }
    this.usrServ.plans().subscribe(res => {
      this.plans = res
    })
  }

  edit(item) {
    delete item._id
    delete item.__v
    this.itemToEdit = JSON.stringify(item, undefined, 4);
  }

  save(item) {
    this.admServ.savePlan(JSON.parse(item)).subscribe(res => {
      this.usrServ.plans().subscribe(res => {
        this.plans = res
      })
    })
  }

  migrateFaq() {
    let element = JSON.parse(this.itemToEdit)
    for (let index2 = 0; index2 < element.faq.length; index2 += 2) {
      if (!element.faqObj) element.faqObj = []
      if (element.faq[index2]) {
        element.faqObj.push({
          ask: element.faq[index2],
          response: element.faq[index2 + 1]
        })
      }

      this.itemToEdit = JSON.stringify(element, undefined, 4)
    }
  }

}
