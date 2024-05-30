import {Component, OnInit} from "@angular/core";
import {CourseService} from "@services/course.service";
import {Router} from "@angular/router";
import {ICourse} from "../../models/Course";

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent implements OnInit{

  private token:string;
  public courses: ICourse[];


  constructor(
    private CourseService: CourseService,
    private router: Router
  ) {
  }

  ngOnInit():void{

    this.CourseService.getAllCourses().subscribe(
      (result) =>{
        this.courses = (result as any).data.courses;
      },
    (error)=>{
      console.log(error)
    }
    );
  }

}
