import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {AppRoutes} from "./app.routes";
import {AuthModule} from "@modules/auth/auth.module";
import {MainModule} from "@modules/main/main.module";
import {SharedModule} from "@shared/components/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {AuthGuard} from "./guard/auth.guard";
import {jwtInterceptorProviders} from "./interceptor/jwt.inteceptor";
import {CoursePageModule} from "@modules/course-page/course-page.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutes,
    AuthModule,
    MainModule,
    SharedModule,
    HttpClientModule,
    CoursePageModule
  ],
  providers: [AuthGuard, JwtHelperService, {provide: JWT_OPTIONS, useValue:JWT_OPTIONS}, jwtInterceptorProviders],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule {}
