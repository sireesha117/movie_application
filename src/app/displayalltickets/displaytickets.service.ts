
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { displayticket } from './displyticket';

@Injectable({
  providedIn: 'root',
})
export class DisplayticketsService {
  constructor(private http: HttpClient) {}

  
  private apigetadmin: String = `http://localhost:8080/api/v1/ticket/alltickets`;
  getallmovieticketsadmin(): Observable<Array<displayticket>> {
    return this.http.get<Array<displayticket>>(`${this.apigetadmin}`);
  }
  private apiget: String = `http://localhost:8080/api/v1/ticket/findticket`;

getallmovietickets(username: string): Observable<Array<displayticket>> {
    let url = `${this.apiget}/${username}`; 
    return this.http.get<Array<displayticket>>(url);
}

}
