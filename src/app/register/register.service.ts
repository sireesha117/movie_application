import { Injectable } from '@angular/core';
import { Register } from './register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  private apipost: string = `http://localhost:8080/auth/v1/addUser`;
 

  addUser(b: Register): Observable<Register> {
    return this.http.post<Register>(this.apipost, b);
  }
}
