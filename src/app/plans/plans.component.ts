import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  currentRate: number = 4
  readonly: boolean = true
  search: string = ""
  plans: Array<any> = []
  socialMedia = []
  inboundContent = []
  seo = []
  sales = []
  paidAds = []
  website = []
  publicRelations = []
  user: any = {}
  constructor(
    private translate: TranslateService,
    private usrServ: UsersService,
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {

    this.usrServ.plansMin().subscribe(res => {
      this.plans = res
      this.socialMedia = this.plans.slice(0, 11)
      this.inboundContent = this.plans.slice(11, 29)
      this.seo = this.plans.slice(29, 32)
      this.sales = this.plans.slice(32, 39)
      this.paidAds = this.plans.slice(39, 49)
      this.website = this.plans.slice(49, 55)
      this.publicRelations = this.plans.slice(55, this.plans.length)
    })
    this.user = JSON.parse(this.usrServ.getSession('user'));
  }

  details(id) {
    this.usrServ.setSession("plan-detail", id)
    this.usrServ.goToWithParam("/plan", id)
  }

  inSeach(search: string, title: string) {
    return title.toLocaleLowerCase().indexOf(search) !== -1
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  getImage(title: string) {
    let resources = [
      "assets/img/icons/get-more-instagram-followers.svg",
      "assets/img/icons/get-more-twitter-followers.svg",
      "assets/img/icons/linkedin-management.svg",
      "assets/img/icons/2813-social-media-management1.svg",
      "assets/img/icons/2868-advanced-facebook-ads-management.svg",
      "assets/img/icons/2847-animated-infographic-video.svg",
      "assets/img/icons/2870-cold-sales-email-campaigns.svg",
      "assets/img/icons/2871-managed-wordpress-website.svg",
    ]
    let pos = title.toLocaleLowerCase().indexOf("instagram") != -1 ? 0 :
      title.toLocaleLowerCase().indexOf("twitter") != -1 ? 1 :
        title.toLocaleLowerCase().indexOf("social") != -1 ? 3 :
          title.toLocaleLowerCase().indexOf("facebook") != -1 ? 4 :
            title.toLocaleLowerCase().indexOf("infographic") != -1 ? 5 :
              title.toLocaleLowerCase().indexOf("sales") != -1 ? 6 :
                title.toLocaleLowerCase().indexOf("word press") != -1 ? 7 :
                  title.toLocaleLowerCase().indexOf("linkedin") != -1 ? 2
                    : 6
    let resource = resources[pos]
    return resource

  }

}
