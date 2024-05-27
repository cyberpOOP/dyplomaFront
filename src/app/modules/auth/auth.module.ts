import { NgModule } from '@angular/core';
import {AuthComponent} from "./auth.component";
import {AuthRoutes} from "./auth.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  exports: []
})
export class AuthModule {}
