import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthToken } from './auth-token';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from './auth-response';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'https://labjwt.zecer.wi.zut.edu.pl/api';

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
  ) { }

  public isAuth(): boolean{
    return !this.jwtHelper.isTokenExpired()
  }
  public isAdmin(): boolean{
    const token: AuthToken = this.jwtHelper.decodeToken() as AuthToken
    if(!this.isAuth()){
      return false;
    }
    return token && token.roles && token.roles.includes("ADMIN");
  }

  public logout(): void{
    localStorage.removeItem("access_token");
  }
  public getUsername(): string | null{
    const token: AuthToken = this.jwtHelper.decodeToken() as AuthToken
    return token?.sub;
  }
  public login(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseURL}/auth/login`, {username, password})
      .pipe(
        tap(response => {
          console.debug('login() response', response);
          if (response.token) {
            localStorage.setItem('access_token', response.token);
          } else {
            localStorage.removeItem('access_token');
          }
        })
      )
    ;
  }
}
