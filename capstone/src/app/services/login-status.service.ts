import { Injectable, LOCALE_ID } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  // private login = new BehaviorSubject<boolean>(localStorage.getItem('token') !== null);
  // currentVariable = this.login.asObservable();
  private login = localStorage.getItem('token') !== null;

  get IsLoggedIn(): boolean {
    // return this.login.getValue();
    return this.login;
  }

  set IsLoggedIn(value: boolean) {
    // this.login.next(value);
    this.login = value;
  }
}
