import { Component } from '@angular/core';
import { BANNIERE_ACCEUIL } from '../../../business/domain/constants/constantes';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  bannieres = BANNIERE_ACCEUIL

  constructor(
  ) {

  }
}
