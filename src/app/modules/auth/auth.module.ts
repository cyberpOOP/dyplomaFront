import { NgModule } from '@angular/core';
import {AuthComponent} from "./auth.component";
import {AuthRoutes} from "./auth.routes";


@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutes
  ],
  providers: [],
  exports: []
})
export class AuthModule {}
