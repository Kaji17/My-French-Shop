import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
size: NzButtonSize = 'large';
  logoMfs: string = environment.logoMfs

  constructor(
    private route: Router
  ) {
  }

  signinWithEmail(): void {
    this.route.navigate(['auth/login'])
  }
}
