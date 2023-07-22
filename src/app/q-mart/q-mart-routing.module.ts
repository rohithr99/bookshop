import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QMartComponent } from './q-mart.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: QMartComponent },
                        { path: 'register', component: RegisterComponent},
                        { path: 'home', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QMartRoutingModule { }
