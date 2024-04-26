import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class LoginJService {
  constructor(private http: HttpClient) {}
  private userRole='';
  private isAuthanticated=false;

  apiget: string = `http://localhost:8080/auth/v1/login`;

  // public generateToken(request: any): Observable<any> {
  //   return this.http.post(
  //     this.apiget,   
  //     request
  //   );
  // }

  public generateToken(request: any): Observable<any> {
    return this.http.post(this.apiget, request).pipe(
      tap((response: any) => {
       if(response.Message="User successfully logged in"){
        this.userRole=response.userRole;
        this.isAuthanticated=true;
       }
        
      
      })
    );
  }
  isLoggedIn():boolean{
    return this.isAuthanticated;
  }
  
  isAdmin():boolean{
    return this.userRole=="admin" && this.isLoggedIn();
  }  
  isCustomer():boolean{
    return this.userRole=="customer"  && this.isLoggedIn();
  }
    
}
