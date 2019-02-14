import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  section: string = ""
  plan: any = {}

  constructor(
    private usrServ: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // send an email, if the user is not in the system please continue to register your account, 
    // thank you so much for your pruschase
    //location.reload(true)
   /*  this.route.params.subscribe(params => {
      this.section = params['id'];
      this.usrServ.planID({ id: this.section }).subscribe(res => {
        this.plan = res[0]
        setDataLayer([{
          'transactionID': 'T12345', //javascript random number after T
          'transactionAffiliation': 'Searchfuse Marketing', //static searcfuse marketing
          'transactionTotal	': this.plan.price + (this.plan.price * 0.05), //total price that includes 5%
          'transactionTax	': this.plan.price * 0.05, //5% of the product price
          'coupon': 'SUMMER20',
          'transactionProducts': [{
            'sku': 'P12345', //category name with no space + incremental number
            'name': this.plan.title, // product name
            'category': 'Social Media', //category name
            'price': this.plan.price, // total price minus 5%
            'quantity': 1
          }] //quantity
        }])
      })
      this.usrServ.planIDView({ id: this.section }).subscribe(console.log)
    }); */
  }

}
