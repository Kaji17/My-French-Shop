import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import { SharedModule } from '../../shared/shared.module';
import { LibSharedModule } from '../../shared/lib-shared/lib-shared.module';


const routes: Routes = [
  {
    path: "",
    component: AccueilComponent,
  }
]

@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    LibSharedModule,
    SharedModule,
    RouterModule.forChild(routes),


  ],
  exports: [
    AccueilComponent
  ]
})
export class AccueilModule { }
