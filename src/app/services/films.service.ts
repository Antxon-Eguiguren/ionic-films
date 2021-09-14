import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FilmsResponse } from '../interfaces/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  baseUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getFilmsByTitle(title: string, page: number): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${this.baseUrl}?apikey=${env.apiKey}&s=${title}&page=${page}`, {});
  }
}
