import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getCategoryService() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getproducts(e: any) {
    return this.http.get(`https://fakestoreapi.com/products/category/${e}`);
  }
}
