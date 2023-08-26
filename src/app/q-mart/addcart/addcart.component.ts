import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit{

  phone: any;
  cartArr : any;

  constructor(private ds : DataServiceService, private router: Router){

  }
  ngOnInit(): void {
    if(localStorage.getItem('currentPhone')){
      this.phone = localStorage.getItem('currentPhone');
      console.log(this.phone);
      
      this.ds.displayCart(this.phone).subscribe((result: any) => {
        this.cartArr = result.message;
        console.log(this.cartArr);      
      })
    }
  }

  removeItem(sl : any){
    this.ds.removeFromCart(sl).subscribe((item: any) => {
      this.ds.displayCart(this.phone).subscribe((result: any) => {
        this.cartArr = result.message;
        console.log(this.cartArr);
        // this.router.navigateByUrl('/qMart/addCart');    
      })
    })
  }


}
