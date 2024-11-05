import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appsettings } from '../../Settings/appsettings';
import { Product } from '../../Models/Product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _apiUrl: string = appsettings.apiUrl + "products";

  constructor( private http: HttpClient) {}


   getAllProducts(): Observable<Product[]> {
    return  this.http.get<Product[]>(this._apiUrl);
   }
}
