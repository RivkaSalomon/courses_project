import { Component, OnInit } from '@angular/core';
import { Course, EHowToLearn } from '../../classes/course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // If icons are used
 
@Component({
     selector: 'app-all-courses',
     templateUrl: './all-courses.component.html',
    styleUrl: './all-courses.component.scss'
   })

export class AllCoursesComponent implements OnInit {
  public coursesList: Course[] = [];
  public filteredCourses?: Observable<Course[]>;
  public searchByName: string = '';
  public selectedCategory?: string = '';
  public selectedHowLearning: string = '';

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.filteredCourses = this.courseService.getCourses().pipe(
      tap(courses => this.coursesList = courses),
      map(courses => this.filterCourses(courses))
    );
  }
public learningWay( num:number){
  switch (num) {
    case 0:
      return 'זום';
    case 1:
      return 'פרונטלי';
    default: return ''
      }
}
  filterCourses(courses: Course[]): Course[] {
    return courses.filter(course =>
      (!this.searchByName || course.name.toLowerCase().includes(this.searchByName.toLowerCase())) &&
      (!this.selectedCategory || course.categoryId.toString() === this.selectedCategory) &&
      (!this.selectedHowLearning || course.learningWay === EHowToLearn[this.selectedHowLearning as keyof typeof EHowToLearn])
    );
  }

  showDetails(course: Course): void {
    this.router.navigate(["/course/Course-Details", course.id]);
  }

  get howToLearn(): typeof EHowToLearn {
    return EHowToLearn;
  }
filteredByName(){
  this.filteredCourses = this.courseService.getCourses().pipe(
    tap(courses => this.coursesList = courses),
    map(courses => {
      return courses.filter(course => 
      (!this.searchByName || course.name.toLowerCase().includes(this.searchByName.toLowerCase()))
    );
  })
);
}
  applyCategoryFilter(): void {
  this.filteredCourses = this.courseService.getCourses().pipe(
    tap(courses => this.coursesList = courses),
    map(courses => {
      return courses.filter(course => 
        (!this.selectedCategory || 
          (this.selectedCategory.toLowerCase() === 'all categories' || 
           this.getCategoryId(this.selectedCategory.toLowerCase()) === course.categoryId)
        ) &&
        (!this.selectedHowLearning || course.learningWay === EHowToLearn[this.selectedHowLearning as keyof typeof EHowToLearn])
      );
    })
  );
}

  public getCategoryId(categoryName: string): number {
    switch (categoryName.toLowerCase()) {
      case 'בנים':
        return 1;
      case 'בנות':
        return 2;
      default:
        return 0; // Or return a default category ID if the name doesn't match
    }
  }  

  applyHowLearningFilter(): void {
    this.filteredCourses = this.courseService.getCourses().pipe(
      tap(courses => this.coursesList = courses),
      map(courses => this.filterCourses(courses))
    );
  }
}

