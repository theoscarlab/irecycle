import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  serv: any = {}
  constructor(
    private usrServ: UsersService,
  ) {
    this.serv = usrServ
  }

  ngOnInit() {
  }

}
