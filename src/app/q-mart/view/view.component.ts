import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  sl: any;
  item: any;

  constructor(private ar: ActivatedRoute,private ds:DataServiceService){}
  
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

}
