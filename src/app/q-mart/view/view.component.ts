import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  sl: any;
  item: any = {};
  phone: any;

  constructor(private ar: ActivatedRoute,private ds:DataServiceService,private router:Router){}
  
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.sl = data.sl;
      console.log(this.sl);
    })

    //api call

    this.ds.getProduct(this.sl).subscribe((result: any) => {
      // console.log(result.data);
      this.item = result.data;
      console.log(this.item);
    })
  }

  // api for add to cart
  addCart(){
    if(localStorage.getItem("currentPhone")){
      this.phone = localStorage.getItem("currentPhone");
      
      this.ds.addToCart(this.sl,this.phone).subscribe((result: any) => {
        alert("product added to cart");
        console.log(result);   
      })
    }else{
      alert("please login to add to cart");
      this.router.navigateByUrl('qMart/login');
    }
  }

  back(){
    this.router.navigateByUrl('');
  }

}
