import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    'path': '',
    component: MainComponent,
    pathMatch: 'prefix'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MainRoutes {}

