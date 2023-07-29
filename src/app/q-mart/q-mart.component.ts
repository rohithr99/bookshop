import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './service/data-service.service';


@Component({
  selector: 'app-q-mart',
  templateUrl: './q-mart.component.html',
  styleUrls: ['./q-mart.component.css']
})
export class QMartComponent  implements OnInit{

  productsData: any = [];
  categoryArray: any = [];
  searchString: any = '';
  searchTerm: any;

  constructor(private ds: DataServiceService){}


  ngOnInit(): void {
    this.ds.getAllProduct().subscribe((products: any) => {
      // console.log(products.message);

      this.productsData = products.message;
      console.log(this.productsData);
      
      this.categoryArray = this.productsData;

      this.ds.searchBs.subscribe((value: any) => {
        console.log(value);
        
        this.searchString = value;
      })
    })
  }

  filterProduct(categoryId: any){
    this.categoryArray = this.productsData.filter((item:any) => 
      item.category == categoryId || categoryId == "" );
      console.log(this.categoryArray);
      
  }

  search(event: any){
    // console.log(event.target.value);
    this.searchTerm = event.target.value;
    console.log(this.searchTerm);
    this.ds.searchBs.next(this.searchTerm);
  }
  
}
