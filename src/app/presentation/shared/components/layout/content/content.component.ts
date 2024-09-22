import { Component } from '@angular/core';
import { BANNIERE_ACCEUIL } from '../../../../../business/domain/constants/constantes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  bannieres = BANNIERE_ACCEUIL
}
