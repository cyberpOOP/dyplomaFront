import {Injectable} from "@angular/core";
import {HttpService} from "@services/http.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})

export class UserService{
  controllerUrl:string;

    constructor(
        private httpService: HttpService,
        private jwtHelper: JwtHelperService,
    ) {
        this.controllerUrl = '/user';
    }


    getUsersByIds(ids:string[]){
      return this.httpService.post(`${this.controllerUrl}/profile`, ids);
    }
}
