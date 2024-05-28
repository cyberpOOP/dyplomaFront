import {Component, OnInit} from "@angular/core";
import {CourseService} from "@services/course.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent implements OnInit{

  private token:string;

  constructor(
    private CourseService: CourseService,
    private router: Router
  ) {
  }

  ngOnInit():void{

    this.CourseService.getAllCourses().subscribe(
      (result) =>{
        console.log(result)
      },
    (error)=>{
      console.log(error)
    }
    );
  }

}
