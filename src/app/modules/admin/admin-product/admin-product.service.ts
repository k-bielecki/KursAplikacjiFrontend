import { Injectable } from '@angular/core';
import { AdminProduct } from './model/adminProduct';
import { Page } from '../../common/model/page';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  
  constructor(private http: HttpClient) { }
  
  getProducts(page: number, size: number): Observable<Page<AdminProduct>> {
    return this.http.get<Page<AdminProduct>>(`/api/admin/products?page=${page}&size=${size}`);    
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('/api/admin/products/' + id);
  }

}
