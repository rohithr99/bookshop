import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  //api to register
  register(username:any,email:any,phone:any,passwd:any){
    const bodyData = {
       username,
       email,
       phone,
       passwd
    }

    return this.http.post('http://localhost:8000/qMart/register',bodyData);
  }


}
