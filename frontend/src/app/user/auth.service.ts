import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl : string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

   isAuthenticated():boolean {
    const token: string = localStorage.getItem('token') || ''
    const payload = atob(token.split(' ')[1]);
    const parsedPayload= JSON.parse(payload);
    return parsedPayload.exp > Date.now() }






}
