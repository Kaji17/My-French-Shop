import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  size: NzButtonSize = 'large';
  logoMfs: string = environment.logoMfs

  constructor(
    private route: Router
  ) {
  }

  registerWithEmail(): void {
    this.route.navigate(['auth/register'])
  }
  loginWithEmail(): void {
    this.route.navigate(['auth/login/email'])
  }
  ngOnInit(): void {
  }
}
