import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {JwtHelperService} from '@auth0/angular-jwt'

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
    this.login(user);
    return this.httpService.post(`${this.controllerUrl}/signup`, user);
  }

  login(user: any){
    return this.httpService.post(`${this.controllerUrl}/login`, user);
  }

  forgotPassword(user: any){
    return this.httpService.post(`${this.controllerUrl}/forgotPassword`, user);
  }

  //TODO pass params
  resetPassword(user:any){
    return this.httpService.post(`${this.controllerUrl}/resetPassword`, user)
  }

  getUser(user:any){

  }

  updateUser(user:any){

  }

  deleteUser(user: any){

  }

}
