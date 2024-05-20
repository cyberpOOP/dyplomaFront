import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {CourseComponent} from "./course-card/course.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BurgerComponent} from "./burger/burger.component";

@NgModule({
  imports: [CommonModule, RouterLink, RouterLinkActive],
  declarations: [HeaderComponent, CourseComponent, BurgerComponent],
  exports: [HeaderComponent, CourseComponent, BurgerComponent]
})

export class SharedModule{

}
