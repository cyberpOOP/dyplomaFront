import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {JwtHelperService} from '@auth0/angular-jwt'
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  controllerUrl: string;

  constructor(
    private httpService: HttpService,
    private jwtHelper: JwtHelperService,
  ) {
    this.controllerUrl = '/user';
  }

  signup(user: any){
    return this.httpService.post(`${this.controllerUrl}/signup`, user);
  }

  login(user: any){
    return this.httpService.post(`${this.controllerUrl}/login`, user);
  }

  forgotPassword(user: any){
    return this.httpService.post(`${this.controllerUrl}/forgotPassword`, user);
  }
  resetPassword(user:any){
    return this.httpService.post(`${this.controllerUrl}/resetPassword`, user)
  }

  isAuthenticated():Observable<boolean>{

    const token = localStorage.getItem('accessToken');
    if (this.jwtHelper.isTokenExpired(token)) {
      this.logout();
      return of(false);
    }
    return of(true);
  }
  logout():void{
    localStorage.removeItem('accessToken');
  }
}
