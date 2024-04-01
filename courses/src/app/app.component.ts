import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,


   imports: [CommonModule , RouterOutlet,UserModule ,CourseModule, HomeComponent],

  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit  {
  title = 'Angular-Project';
  // הפוקנציה הראשונה שעולה מיד בהעלת הקומפוננטה לאויר
  ngOnInit(): void {
  }

// אחרי שהשתנה אלמנטים (לךדוגמא ששלחנו אינפוט לקומפוננטת ילד והיא השתנתה שם)
  ngOnChanges(changes: SimpleChanges): void {

  }

  // אחרי שכל הדום עלה כבר
  ngAfterViewInit(): void {
  }
}
