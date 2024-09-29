import { environment } from './../../../../../environments/environment.prod';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logoMfs: string = environment.logoMfs
}
