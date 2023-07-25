import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  pswCheck:boolean = false;

  constructor(private router:Router, private fb :FormBuilder,private ds:DataServiceService){

  }

  registerForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
    passwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    confirmPass: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })


  signup() {

    var path = this.registerForm.value;


    if (this.registerForm.valid) {
      if (path.passwd == path.confirmPass) {
        this.ds.register(path.username, path.email, path.phone,path.passwd).subscribe((result: any) => {
          alert(result.message);
          this.router.navigateByUrl('');
        },
          result => {
            alert(result.error.message);
            //for accessing error 404 message
          }
        )
      }
      else {
        this.pswCheck = true;
        alert("password doesn't match");
      }
    }
    else{
      alert('Invalid Form');
    }

  }


}
