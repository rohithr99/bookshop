import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,NavigationStart } from '@angular/router';
import { DataServiceService } from 'src/app/q-mart/service/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  accname: any;
  email: any;
  phone: any;

  //button toggler

  constructor(private router:Router){}

  ngOnInit(): void {
    // if(localStorage.getItem('currentUser')){
    //   this.accname = localStorage.getItem('currentUser');
    //   this.email = localStorage.getItem('currentEmail');
    //   this.phone = localStorage.getItem('currentPhone');
    // }    
  }

  loggedIn(){
    this.router.navigateByUrl('qMart/login');
  }

  isLoggedIn(){
    if(this.accname) return true;
    if(localStorage.getItem("currentUser")){
      this.accname = localStorage.getItem("currentUser");
      this.email = localStorage.getItem('currentEmail');
      this.phone = localStorage.getItem('currentPhone');
      return true;
    }
    return false;
  }



  //logout function
  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('currentPhone');
    window.location.reload();
  }




}
