import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ticket } from './ticket';
import { HttpClient } from '@angular/common/http';
import { movie } from '../home/movie';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}
  // private apipost =
  //   'https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage';
  private apipost = 'http://localhost:8080/api/v1/ticket/add';
  //private apiget = `https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage`;
  private apiget = 'http://localhost:8080/api/v1/findmovie';

  bookTicket(ticket: ticket): Observable<ticket> {
    return this.http.post<ticket>(
      `${this.apipost}/${ticket.movie_id_fk}`,
      ticket
    );
  }

  getMovie(mid: number): Observable<movie> {
    return this.http.get<movie>(`${this.apiget}/${mid}`);
  }
}
