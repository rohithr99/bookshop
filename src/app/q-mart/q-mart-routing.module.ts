import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QMartComponent } from './q-mart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [{ path: '', component: QMartComponent },
                        { path: 'register', component: RegisterComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'addcart',component: AddcartComponent },
                        { path: 'view/:sl', component: ViewComponent }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QMartRoutingModule { }
