import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type responseJSON = {
//   username: string,
//   password: string
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080'
  }

  register(credentials: any): Observable<any> {
    return this.http.post(this.url + '/signup', credentials);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.url + '/signin', credentials);
  }

}


