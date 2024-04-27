import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class LoginJService {
  constructor(private http: HttpClient) {}
 
  apiget: string = `http://localhost:8080/auth/v1/login`;

  public generateToken(request: any): Observable<any> {
    return this.http.post(
      this.apiget,   
      request
    );
  }
    
}
