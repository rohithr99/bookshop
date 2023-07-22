import { Component } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // showHead: boolean = false;

  // constructor(private router:Router){
  //   // on route change to '/login', set the variable showHead to false
  //   router.events.forEach((event) => {
  //     if (event instanceof NavigationStart) {
  //       if (event['url'] == 'qMart/register') {
  //         this.showHead = false;
  //       } else {
  //         // console.log("NU")
  //         this.showHead = true;
  //       }
  //     }
  //   });
  // }

}
