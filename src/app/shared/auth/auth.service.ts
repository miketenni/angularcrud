import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiUrl='http://localhost:3000';
  constructor( private httpClient: HttpClient) { }

  signupApi(postData:any){
    return this.httpClient.post(`${this.ApiUrl}/signup`,postData).pipe(map((data)=>{
      console.log(data);
    }))
  }

  getSignupApi(){
    return this.httpClient.get(`${this.ApiUrl}/signup`).pipe(map((data)=>{
      console.log([data]);
      console.log([data][0]);

      return data;
    }))
  }

  loginApi(){
    return this.httpClient.get(`${this.ApiUrl}/signup`).pipe(map((data)=>{
      console.log(data);
      return data;
    }))
  }
}
