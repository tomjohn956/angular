import { Complaint } from './complaint';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
   baseUrl = "http://localhost:8086/complaintregister";

  constructor(public httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

   complaintRegister(Complaint: Object): Observable<Object>{
     console.log(Complaint);
     return this.httpClient.post(`${this.baseUrl}`,Complaint);
   }
  // complaintRegister(formData : FormData): Observable<any>{
  //   // return this.httpClient.post("http://localhost:8086/complaintregister",formData);
  //   return this.httpClient.post("http://localhost:8086/complaintregistration",formData);
  // }
}
