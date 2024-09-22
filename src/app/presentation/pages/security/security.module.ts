import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RefreshPasswordComponent } from './refresh-password/refresh-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RefreshPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }
