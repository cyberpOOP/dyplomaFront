import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutes {}
