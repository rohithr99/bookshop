import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './service/data-service.service';


@Component({
  selector: 'app-q-mart',
  templateUrl: './q-mart.component.html',
  styleUrls: ['./q-mart.component.css']
})
export class QMartComponent  implements OnInit{

  productsData: any;

  constructor(private ds: DataServiceService){}


  ngOnInit(): void {
    this.ds.getAllProduct().subscribe((products: any) => {
      // console.log(products.message);

      this.productsData = products.message;
      console.log(this.productsData);
      
    })
  }

  
}
