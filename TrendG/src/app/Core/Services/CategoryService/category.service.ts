import { Injectable } from '@angular/core';
import { appsettings } from '../../Settings/appsettings';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../Models/Category/category';

@Injectable({
  providedIn: 'root'
  
})
export class CategoryService {
  private _apiUrl: string = appsettings.apiUrl + "products/categories"
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<HttpResponse<string[]>>{
    return this.http.get<string[]>(this._apiUrl,{observe:"response"});
  }
}
