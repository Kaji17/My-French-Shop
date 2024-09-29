import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibSharedModule } from '../../shared/lib-shared/lib-shared.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RefreshPasswordComponent } from './refresh-password/refresh-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginEmailComponent } from './login/login-email/login-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/email', component: LoginEmailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'refresh-password', component: RefreshPasswordComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RefreshPasswordComponent,
    LoginEmailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LibSharedModule,
    SharedModule
  ]
})
export class SecurityModule { }
