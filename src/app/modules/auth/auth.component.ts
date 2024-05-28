import { Component} from '@angular/core';
import {AuthService} from "@services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public email:string;
  public password:string;

  public name:string;
  public emailReg:string;
  public passwordReg:string;
  public passwordConfirm:string;

  public login():void{
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe(
      (result) => {
        console.log(result)
        const token = (result as any).token;
        localStorage.setItem('accessToken', token);
        this.router.navigate(['/']);
      },
    (error) =>{
        console.log(error);
      }
    );

  }

  public signUp():void{
    if(this.passwordReg == this.passwordConfirm){
      this.authService.signup({
        name: this.name,
        email: this.emailReg,
        password: this.passwordReg
      }).subscribe((result)=>{
          const token = (result as any).token;
          localStorage.setItem('accessToken', token);
          this.router.navigate(['/']);
      },
        (error)=>{
        console.log(error);
      })
    }
    else{
      console.log("password not the same")
    }
  }
}
