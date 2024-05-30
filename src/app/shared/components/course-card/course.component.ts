import {Component, Input, OnInit} from "@angular/core";
import {ICourse} from "../../../models/Course";
import {UserService} from "@services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'course-card',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit{

  constructor(
    private UserService: UserService,
    private router:Router
  ) {
  }

  @Input() public course:ICourse;
  @Input() public authors:string[];

  public  toCourse():void{
    this.router.navigate([`/course/${this.course._id}`]);
  }

  ngOnInit(){
      this.UserService.getUsersByIds(this.course.authors_ids).subscribe(
          (result) => {
              this.authors = (result as any).data.usersNames;
          },
          (error) => {
              console.log(error);
          }
      );
  }

}
