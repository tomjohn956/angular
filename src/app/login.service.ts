import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "http://localhost:8083/login";

  constructor(private httpClient: HttpClient) { }

  loginUser(login: Object): Observable<Object>{
    console.log(login);
    return this.httpClient.post(`${this.baseUrl}`,login);
  }
}
