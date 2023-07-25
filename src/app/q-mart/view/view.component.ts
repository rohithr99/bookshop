import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  id: any;

  constructor(private ar: ActivatedRoute,private ds:DataServiceService){}
  
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.id = data.id;
      console.log(this.id);
      
    })

    //api call

    this.ds.getProduct(this.id).subscribe((result: any) => {
      console.log(result);
    })

  }

}
