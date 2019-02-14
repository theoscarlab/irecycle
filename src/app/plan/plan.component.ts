import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import $ from 'jquery'

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  section: string = ""
  email: string = ""
  currentRate: number = 4
  plan: any = {}
  user: any = {}
  showMessage: string = ""
  constructor(
    private usrServ: UsersService,
    private route: ActivatedRoute,
    private meta: Meta
  ) { }

  ngOnInit() {
    /*  this.section = this.usrServ.getSession("plan-detail")
     console.log(this.section) */


    this.route.params.subscribe(params => {
      this.section = params['id'];
      this.usrServ.planID({ id: this.section }).subscribe(res => {
        this.plan = res[0]
        this.initMeta()
      })
      this.usrServ.planIDView({ id: this.section }).subscribe(console.log)
    });

    this.user = JSON.parse(this.usrServ.getSession('user'));


    authorizingPayment = (responseData) => {
      let data = {
        "id": this.user && this.user._id ? this.user._id : "none",
        "email": this.user && this.user.email ? this.user.email : this.email,
        "value": this.plan.price,
        "plan": this.plan.id,
        "currency": "AED",
        "cardToken": responseData.cardToken,
      }
      this.usrServ.authorizingPayment(data).subscribe(response => {
        console.log(response)
        //if (response.status !== 'Declined') {
          //this.usrServ.goTo('plan/' + this.section + '/thank-you')
          
          location.href = 'https://searchfuse.com/plan/' + this.section + '/thank-you'
        /*} else {
          this.showMessageAction(response.responseMessage)
        }*/
      })
    }

  }

  creditCard(invest) {
    if (this.user) {
      this.usrServ.creditCard(this.user.email, invest)
    } else {
      this.usrServ.creditCard(this.email, invest)
    }
  }

  showMessageAction(message) {
    this.showMessage = message

    setTimeout(() => {
      this.showMessage = ""
    }, 4000);
  }

  initMeta() {
    $("[name*='description']").remove()
    this.meta.addTag({ name: 'description', content: this.plan.metaDescription });
    document.title = this.plan.metaTitle
    /* this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' }); */
  }

  validEmail(email) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email)
  }

}
