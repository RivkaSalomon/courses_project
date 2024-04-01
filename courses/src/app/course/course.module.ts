import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AllCoursesComponent } from './all-courses/all-courses.component';
// import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdddeditComponent } from './add-course/add-course.component';
import { CourseRoutesModule } from './course-routing.module';
import { DateColorDirective } from './course.directive';
import { IconPipe } from './icon.pipe';



@NgModule({
  declarations: [AllCoursesComponent,EditCourseComponent,CourseDetailsComponent,AdddeditComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,DateColorDirective,CourseRoutesModule,IconPipe, DatePipe
  ]
})
export class CourseModule { }
