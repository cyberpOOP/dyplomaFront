import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from "./template.component";
import {NgModule} from "@angular/core";

const routes: Routes = [

  {
    path: '',
    component: TemplateComponent,
    pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TemplateRoutes {}
