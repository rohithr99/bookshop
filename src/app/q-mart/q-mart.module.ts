import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QMartRoutingModule } from './q-mart-routing.module';
import { QMartComponent } from './q-mart.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QMartComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    QMartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QMartModule { }
