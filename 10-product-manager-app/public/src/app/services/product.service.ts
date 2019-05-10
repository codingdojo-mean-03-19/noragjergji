import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly base = 'http://localhost:8000/api/products'

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.base);
  }

  getProduct(id: String): Observable<Product>{
    return this.http.get<Product>(`${this.base}/${id}`);
  }

  createProduct( product: Product): Observable<Product> {
    return this.http.post<Product>(this.base, product);
  }

  removeProduct(id: String): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${id}`);
  }

  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.base}/${product._id}`, product);
  }
}
