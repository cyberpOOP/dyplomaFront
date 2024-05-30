import {RouterModule, Routes} from '@angular/router';
import {CoursePageComponent} from "./course-page.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    'path': '',
    component: CoursePageComponent,
    pathMatch: 'prefix'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CoursePageRoutes {}

