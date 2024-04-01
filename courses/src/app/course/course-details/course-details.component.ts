import { Component } from '@angular/core';
import { Course, EHowToLearn } from '../../classes/course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
  
  public course?: Course
  private courseId!: number
  howToLearnValue? : string;
  constructor(private route: ActivatedRoute, private _courseService: CourseService) { }

  ngOnInit(): void {


    
    this.route.params.subscribe((param) => {
      this.courseId = param['id'];
      this._courseService.getCourseById(this.courseId).subscribe({
        next: (res) => {
          this.course = res;
         this.howToLearnValue = this.howToLearn[this.course?.learningWay];
        },
        error: (err) => {
        }
      })
    })
  }

  
public getCategoryName(categoryId: number | undefined): string {
  if (categoryId === undefined) {
    return 'Unknown';
  }

  switch (categoryId) {
    case 1:
      return 'בנים';
    case 2:
      return 'בנות';
    default:
      return 'Unknown';
  }
}
public get howToLearn(): typeof EHowToLearn {
  return EHowToLearn; 
}
}
