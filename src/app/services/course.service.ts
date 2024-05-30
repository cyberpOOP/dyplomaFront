import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  controllerUrl: string;

  constructor(
    private httpService: HttpService,
    private jwtHelper: JwtHelperService,
  ) {
    this.controllerUrl = '/course';
  }

  getAllCourses() {
    return this.httpService.get(`${this.controllerUrl}`);
  }

  getCourseById(id:string){
    return this.httpService.getById(`${this.controllerUrl}`,id)
  }

}
