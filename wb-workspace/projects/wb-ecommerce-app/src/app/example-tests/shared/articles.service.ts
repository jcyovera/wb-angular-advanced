import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../_models/article.model';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Article[]> {
    let params = new HttpParams();
    params = params.append('_sort', 'votes');
    params = params.append('_order', 'desc');
    console.log('hereee');
    return this.http.get<Article[]>(`${this.apiUrl}/articles`, { params })
      .pipe();
  }
}
