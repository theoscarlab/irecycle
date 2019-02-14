import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { UsersService } from "./services/users.service";
import { AdminService } from "./services/admin.service";

import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { PlanComponent } from './plan/plan.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NotificationComponent } from './notification/notification.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminPlansComponent } from './admin-plans/admin-plans.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const ROUTES = [
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: 'plan/:id',
    component: PlanComponent
  },
  {
    path: 'plan/:id/thank-you',
    component: ThankYouComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ResetPasswordComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'adminPlans',
    component: AdminPlansComponent
  },
  {
    path: 'adminUsers',
    component: AdminUsersComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'orderManagement/:id',
    component: OrderManagementComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'notifications',
    component: NotificationComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  },
]

export function HttpLoaderFactory(http: HttpClient) {

  return new TranslateHttpLoader(http);

}

@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    PlanComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    OrdersComponent,
    TransactionsComponent,
    ConfirmComponent,
    ThankYouComponent,
    NotificationComponent,
    MessagesComponent,
    SettingsComponent,
    AdminDashboardComponent,
    ResetPasswordComponent,
    AdminPlansComponent,
    AdminUsersComponent,
    OrderManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [UsersService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
