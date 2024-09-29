import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error-404/error-404.component';
import { ErrorsRoutingModule } from './errors-routing.module';



@NgModule({
  declarations: [
    Error404Component],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
