import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  movies: movie[] | any;
  
  private apiGet: string = `http://localhost:8080/api/v1/getAllMovies`;
 
 
 
  private apidelete: string = `http://localhost:8080/api/v1/delete`;
  getAllMovies(): Observable<Array<movie>> {
    return this.http.get<Array<movie>>(this.apiGet);
  }

 

  deleteMovie(id: number): Observable<number> {
    return this.http.delete<number>(this.apidelete + '/' + id);
  }
}
