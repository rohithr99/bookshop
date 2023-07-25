import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  search = new BehaviorSubject("");

  constructor(private http: HttpClient) { }

  //api to register
  register(username: any, email: any, phone: any, passwd: any) {
    const bodyData = {
      username,
      email,
      phone,
      passwd
    }

    return this.http.post('http://localhost:8000/qMart/register', bodyData);
  }

  //api to login
  login(username: any, passwd: any) {
    const loginData = {
      username,
      passwd
    }

    return this.http.post('http://localhost:8000/qMart', loginData);
  }


  //api to get all products
  getAllProduct() {
    return this.http.get('http://localhost:8000/qMart/products');
  }

  //api to get single product 
  getProduct(id: any) {
    return this.http.get('http://localhost:8000/qMart/products/'+id)
  }

}
