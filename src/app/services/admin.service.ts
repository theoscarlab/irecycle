import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import $ from 'jquery'

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
export class AdminService {

  private apiURL = '/api/v1';  // URL to web api
  private appPrefix = 'denarii_whitelisting_'


  constructor(
    private http: HttpClient,
    private router: Router,
    private meta: Meta
  ) { }

  allUser(): Observable<any> {
    return this.http.post(`${this.apiURL}/allUser`, {}, httpOptions);
  }
  toAdmin(item): Observable<any> {
    return this.http.post(`${this.apiURL}/toAdmin`, item, httpOptions);
  }
  savePlan(item): Observable<any> {
    return this.http.post(`${this.apiURL}/savePlan`, item, httpOptions);
  }
  toAceptEmailVerification(item): Observable<any> {
    return this.http.post(`${this.apiURL}/toAceptEmailVerification`, item, httpOptions);
  }

  createTransaction(item): Observable<any> {
    return this.http.post(`${this.apiURL}/createTransaction`, item, httpOptions);
  }
  removeTransaction(item): Observable<any> {
    return this.http.post(`${this.apiURL}/removeTransaction`, item, httpOptions);
  }
  allTransactions(): Observable<any> {
    return this.http.post(`${this.apiURL}/allTransactions`, {}, httpOptions);
  }
  messageByIDNoAdmin(): Observable<any> {
    return this.http.post(`${this.apiURL}/messageByIDNoAdmin`, {}, httpOptions);
  }
  notificationByIDNoAdmin(): Observable<any> {
    return this.http.post(`${this.apiURL}/notificationByIDNoAdmin`, {}, httpOptions);
  }

}
