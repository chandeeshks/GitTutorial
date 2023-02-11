import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl="https://localhost:7168/api/Api/"
  constructor(private http: HttpClient) { }

  signupform(userObj:any)
  {
     return this.http.post<any>(`${this.baseurl}userregister`,userObj)
  }

  loginform(loginObj:any)
  {
    return this.http.post<any>(`${this.baseurl}Admin`,loginObj)
  }
}
