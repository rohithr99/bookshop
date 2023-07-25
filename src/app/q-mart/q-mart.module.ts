import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QMartRoutingModule } from './q-mart-routing.module';
import { QMartComponent } from './q-mart.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    QMartComponent,
    RegisterComponent,
    LoginComponent,
    AddcartComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    QMartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QMartModule { }
