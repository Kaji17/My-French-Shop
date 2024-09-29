import { Component } from '@angular/core';
import { BANNIERE_ACCEUIL } from '../../../../business/domain/constants/constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 bannieres = BANNIERE_ACCEUIL
}
