import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl = "http://localhost:8083/registeruser";

  constructor(private httpClient: HttpClient) {}

  signupUser(user: Object): Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
  

}
