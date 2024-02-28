import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminReview } from './model/adminReview';

@Injectable({
  providedIn: 'root'
})
export class AdminReviewService {

  constructor(private httpClient: HttpClient) { }

  getReviews(): Observable<Array<AdminReview>>{
    return this.httpClient.get<Array<AdminReview>>("/api/admin/reviews");
  }

  moderate(id: number): Observable<void>{
    return this.httpClient.put<void>(`api/admin/reviews/${id}/moderate`,'');
  }

  delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(`/api/admin/reviews/${id}`);
  }
}
