import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {AppRoutes} from "./app.routes";
import {AuthModule} from "@modules/auth/auth.module";
import {MainModule} from "@modules/main/main.module";
import {SharedModule} from "@shared/components/shared.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutes,
    AuthModule,
    MainModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule {}
