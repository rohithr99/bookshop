import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'qMart', loadChildren: () => import('./q-mart/q-mart.module').then(m => m.QMartModule) },
                        { path:'',redirectTo:'qMart',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
