import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  controllerUrl: string;

  constructor(
    private httpService: HttpService,
    private jwtHelper: JwtHelperService,
  ) {
    this.controllerUrl = '/material';
  }


}
