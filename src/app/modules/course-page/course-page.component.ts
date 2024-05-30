import {Component, OnInit, Input} from "@angular/core";
import {CourseService} from "@services/course.service";
import {Router} from "@angular/router";
import {ICourse} from "../../models/Course";
import {MaterialService} from "@services/material.service";
import {DataService} from "@services/data.service";
import {UserService} from "@services/user.service";


@Component({
  selector: 'course-page',
  templateUrl: 'course-page.component.html',
  styleUrls: ['course-page.component.css']
})

export class CoursePageComponent implements OnInit{

  constructor(
    private CourseService: CourseService,
    private MaterialService: MaterialService,
    private DataService: DataService,
    private UserService: UserService,
    private router:Router
  ){}

  @Input() public course:ICourse
  @Input() public authors:string[];

  private id:string;

  //TODO fix name undefined error

  ngOnInit():void{
    this.id = this.router.url.slice(8) //TODO make it better way
    this.CourseService.getCourseById(this.id).subscribe(
      (result) =>{
        this.course = (result as any).data.course;

        console.log(this.course)
        this.UserService.getUsersByIds(this.course.authors_ids).subscribe(
          (result) => {
            this.authors = (result as any).data.usersNames;
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error)
      }
    )

  }

}
