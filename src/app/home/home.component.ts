import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPlans: Array<any> = []
  currentRate: number = 4
  user: any = {}
  constructor(
    private usrServ: UsersService,
  ) { }

  ngOnInit() {
    this.usrServ.plansMin().subscribe(res => {
      this.featuredPlans = res.slice(0, 6)
    })
    this.user = JSON.parse(this.usrServ.getSession('user'));
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

  details(id) {
    this.usrServ.setSession("plan-detail", id)
    this.usrServ.goToWithParam("/plan", id)
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
