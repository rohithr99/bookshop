import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router:Router,private ds:DataServiceService,private fb:FormBuilder){

  }


  //model
  loginForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    passwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })

  login(){
    var username = this.loginForm.value.username;
    var passwd = this.loginForm.value.passwd;

    if(this.loginForm.valid){
      this.ds.login(username,passwd).subscribe((result:any) => {

        localStorage.setItem('currentUser',result.currentUser);
        localStorage.setItem('currentPhone',result.currentPhone);
        localStorage.setItem('currentEmail',result.currentEmail);
        
        alert(result.message);
        this.router.navigateByUrl('');
      }, 
      result => {
        alert(result.error.message)
      }
      )
    }else{
      alert("invalid form");
    }
  }

}
