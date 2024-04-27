import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoleService {
    
  private roleSource = new BehaviorSubject<string>('guest');
  currentRole = this.roleSource.asObservable();

  constructor() { }

  changeRole(role: string) {
    this.roleSource.next(role);
  }
}
