import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: 'test',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AppRoutes{}
