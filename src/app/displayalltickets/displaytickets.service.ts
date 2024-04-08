import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { displayticket } from './displyticket';

@Injectable({
  providedIn: 'root',
})
export class DisplayticketsService {
  constructor(private http: HttpClient) {}

  
  private apiget: String = `http://localhost:8080/api/v1/ticket/alltickets`;
  getallmovietickets(): Observable<Array<displayticket>> {
    return this.http.get<Array<displayticket>>(`${this.apiget}`);
  }
}
