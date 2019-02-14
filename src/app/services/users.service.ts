import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import $ from 'jquery'
import * as socketIo from 'socket.io-client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpCheckoutOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'pk_78cc7952-478a-4a11-97d0-b68d616b8815' })
};
const httpOptionsFiles = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = '/api/v1';  // URL to web api
  private appPrefix = 'denarii_whitelisting_'
  //SERVER_URL = 'https://searchfuse.com';
  SERVER_URL = 'http://localhost:4000';
  socket: any = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private meta: Meta
  ) {
    this.initSocket()
  }

  //sockets
  public initSocket(): void {
    this.socket = socketIo(this.SERVER_URL);
  }

  public send(message: string): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('message', (data: string) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
  //sockets

  login(credentials): Observable<any> {
    return this.http
      .post(`${this.apiURL}/login`, credentials, httpOptions)
      .pipe(
        tap(user => {
          if (user) {
            this.setSession('user', JSON.stringify(user))
          }
        })
      );
  }

  logout() {
    this.removeSession('user');
    this.router.navigate(['/login']);
  }

  status(): Observable<any> {
    return this.http
      .post(`${this.apiURL}/status`, {}, httpOptions)
      .pipe(
        tap(user => this.setSession('user', JSON.stringify(user)))
      );
  }

  getSession(elem: string) {
    return window.localStorage.getItem(this.appPrefix + elem);
  }

  setSession(elem: string, val: any) {
    window.localStorage.setItem(this.appPrefix + elem, val);
  }

  removeSession(elem: string) {
    this.http.post(`${this.apiURL}/logout`, httpOptions).subscribe(response => {
      console.log(response)
    })
    window.localStorage.removeItem(this.appPrefix + elem);
  }

  ifValidUserToMain() {
    let user = JSON.parse(this.getSession('user'));
    if (user) {
      this.router.navigate(['/dashboard']);
    }
    return user
  }

  ifInvalidUserToLogin() {
    let user = JSON.parse(this.getSession('user'));
    if (!user) {
      this.router.navigate(['/login']);
    }
    return user
  }

  checkCode(code): Observable<any> {
    return this.http.post(`${this.apiURL}/checkCode`, code, httpOptions)
      .pipe(
        tap(user => {
          if (user) {
            this.setSession('user', JSON.stringify(user))
          }
        })
      );;
  }

  updateUser(data): Observable<any> {
    return this.http.post(`${this.apiURL}/updateUser`, data, httpOptions);
  }

  changePass(data): Observable<any> {
    return this.http.post(`${this.apiURL}/changePass`, data, httpOptions);
  }
  changePassCode(data): Observable<any> {
    return this.http.post(`${this.apiURL}/changePassCode`, data, httpOptions);
  }
  resetPassEmail(email): Observable<any> {
    return this.http.post(`${this.apiURL}/resetPassEmail`, email, httpOptions);
  }

  plans(): Observable<any> {
    return this.http.post(`${this.apiURL}/plans`, {}, httpOptions)
  }
  plansMin(): Observable<any> {
    return this.http.post(`${this.apiURL}/plansMin`, {}, httpOptions)
  }
  planID(planID): Observable<any> {
    return this.http.post(`${this.apiURL}/planID`, planID, httpOptions)
  }

  planIDView(planID): Observable<any> {
    return this.http.post(`${this.apiURL}/view`, planID, httpOptions)
  }
  planTitle(planTitle): Observable<any> {
    return this.http.post(`${this.apiURL}/planTitle`, planTitle, httpOptions)
  }

  transactions(): Observable<any> {
    return this.http.post(`${this.apiURL}/transactions`, {}, httpOptions)
  }
  transactionByID(data): Observable<any> {
    return this.http.post(`${this.apiURL}/transactionByID`, data, httpOptions)
  }
  orderRequirements(data): Observable<any> {
    return this.http.post(`${this.apiURL}/orderRequirements`, data, httpOptions)
  }
  requirementsAcepted(data): Observable<any> {
    return this.http.post(`${this.apiURL}/requirementsAcepted`, data, httpOptions)
  }
  orderCompleted(data): Observable<any> {
    return this.http.post(`${this.apiURL}/orderCompleted`, data, httpOptions)
  }
  rateOrder(data): Observable<any> {
    return this.http.post(`${this.apiURL}/rateOrder`, data, httpOptions)
  }
  createOrder(data): Observable<any> {
    return this.http.post(`${this.apiURL}/createOrder`, data, httpOptions)
  }
  completedOrder(data): Observable<any> {
    return this.http.post(`${this.apiURL}/completedOrder`, data, httpOptions)
  }

  sendMessage(data): Observable<any> {
    return this.http.post(`${this.apiURL}/sendMessage`, data, httpOptions)
  }
  messagesByTransaction(data): Observable<any> {
    return this.http.post(`${this.apiURL}/messagesByTransaction`, data, httpOptions)
  }
  openMessage(data): Observable<any> {
    return this.http.post(`${this.apiURL}/openMessage`, data, httpOptions)
  }
  closeMessage(data): Observable<any> {
    return this.http.post(`${this.apiURL}/closeMessage`, data, httpOptions)
  }
  messages(): Observable<any> {
    return this.http.post(`${this.apiURL}/messages`, {}, httpOptions)
  }
  messageByIDAdmin(): Observable<any> {
    return this.http.post(`${this.apiURL}/messageByIDAdmin`, {}, httpOptions)
  }

  map(data): Observable<any> {
    return this.http.post(`${this.apiURL}/map`, data, httpOptions)
  }
  sendNotification(data): Observable<any> {
    return this.http.post(`${this.apiURL}/sendNotification`, data, httpOptions)
  }
  notificationsByTransaction(data): Observable<any> {
    return this.http.post(`${this.apiURL}/notificationsByTransaction`, data, httpOptions)
  }
  openNotification(data): Observable<any> {
    return this.http.post(`${this.apiURL}/openNotification`, data, httpOptions)
  }
  closeNotification(data): Observable<any> {
    return this.http.post(`${this.apiURL}/closeNotification`, data, httpOptions)
  }
  notifications(): Observable<any> {
    return this.http.post(`${this.apiURL}/notifications`, {}, httpOptions)
  }
  notificationByIDAdmin(): Observable<any> {
    return this.http.post(`${this.apiURL}/notificationByIDAdmin`, {}, httpOptions)
  }

  sendVerificationEmail(data): Observable<any> {
    return this.http.post(`${this.apiURL}/send-verification-email`, data, httpOptions);
  }
  signup(user): Observable<any> {
    return this.http.post(`${this.apiURL}/user`, user, httpOptions);
  }

  getSystemVersion(): Observable<any> {
    return this.http.post(`${this.apiURL}/getSystemVersion`, httpOptions)
  }
  checkoutTokenCard(data): Observable<any> {
    return this.http.post(`https://api2.checkout.com/v2/tokens/card`, data, httpCheckoutOptions)
  }
  checkSystemVersion() {
    this.getSystemVersion().subscribe(res => {
      if (res != this.getSession("system-version")) {
        this.setSession("system-version", res)
        console.log("version need to be updated!!!")
        setTimeout(() => {
          location.reload(true)
        }, 1000);
      } else {
        console.log("version updated")
      }
    })
  }

  goTo(page) {
    this.router.navigate([page]);
  }

  goToWithParam(page, parameter) {
    this.router.navigate([page, parameter]);
  }
  /* Payment Chechkout */
  creditCard(email, invest) {
    creditCardInit(email, invest * 100)
  }

  authorizingPayment(data): Observable<any> {
    return this.http.post(`${this.apiURL}/authorizingPayment`, data, httpOptions)
  }

  initMeta() {
    $("[name*='description']").remove()
    this.meta.addTag({ name: 'description', content: "Searchfuse is a growth hacker marketplace for on-demand marketing service providers. In just a few clicks, you can get expert digital marketers support your digital marketing needs." });
    document.title = "On-demand Digital Marketers  - Searchfuse"
    /* this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' }); */
  }

  isUserManage() {
    let user = JSON.parse(this.getSession('user'));
    if (user.userType && !user.userType.some(e => e.toLowerCase() === 'manager')) {
      return false
    }
    return true
  }

  isUserDriver() {
    let user = JSON.parse(this.getSession('user'));
    if (user.userType && !user.userType.some(e => e.toLowerCase() === 'driver')) {
      return false
    }
    return true
  }

}
