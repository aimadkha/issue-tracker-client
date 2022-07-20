import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/track/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  params: HttpParams | undefined;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    this.params = new HttpParams()
      .set('username', username)
      .set('password', password);
    console.log('inside login services' + username + ' ' + password);
    return this.http.post(
      AUTH_API + 'login',

      this.params,
      httpOptions
    );
  }

  register(
    prenom: string,
    email: string,
    password: string,
    nom: string,
    tele: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'user/save',
      {
        prenom,
        email,
        password,
        nom,
        tele,
      },
      httpOptions
    );
  }
}
