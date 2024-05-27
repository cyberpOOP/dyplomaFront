import { Component} from '@angular/core';
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{

  constructor(
    private authService: AuthService
  ) {}


  public email:string;
  public password:string;

  public login():void{
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe(
      (result) => {
        console.log(result);
      },
    (error) =>{
        console.log("sraka");
      }
    );

  }

}
