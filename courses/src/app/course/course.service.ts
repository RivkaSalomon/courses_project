import { Injectable } from '@angular/core';
import { Course } from '../classes/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }
  public getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>('https://localhost:44384/api/Course')
  }

  public getCourseById(id: number): Observable<Course>{
    return this.http.get<Course>(`https://localhost:44384/api/Course/${id}`);
  }
  public save(c: Course): Observable<any> {
    // this.products.push(p)
    return this.http.post('https://localhost:44384/api/Course', c)
  }
  public edit(c: Course, id:number): Observable<any> {
    // this.products.push(p)
    return this.http.put(`https://localhost:44384/api/Course/${id}`, c)
  }
}
