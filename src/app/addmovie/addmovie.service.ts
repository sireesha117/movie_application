import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from './addmovie';

@Injectable({
  providedIn: 'root',
})
export class AddMovieService {
  constructor(private http: HttpClient) {}

  private apiPost: string = 'http://localhost:8080/api/v1/addMovie';

  addMovie(movie: movie): Observable<movie> {
    return this.http.post<movie>(this.apiPost, movie);
  }
}
