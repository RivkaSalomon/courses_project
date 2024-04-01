import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './classes/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  public getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>('https://localhost:44384/api/Category')
  }
  public getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(`https://localhost:44384/api/Category/${id}`);
  }
}
