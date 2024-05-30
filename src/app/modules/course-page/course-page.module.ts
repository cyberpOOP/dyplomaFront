import {NgModule} from "@angular/core";
import {CoursePageComponent} from "./course-page.component";
import {CoursePageRoutes} from "./course-page.routes";
import {SharedModule} from "@shared/components/shared.module";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CoursePageRoutes, SharedModule, NgForOf
  ],
  providers: [],
  bootstrap: [CoursePageComponent],
})

export class CoursePageModule{

}
