import { Component } from '@angular/core';
import { BOTTOM_BAR_MOBILE } from '../../../../business/domain/constants/constantes';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

bottomBars=BOTTOM_BAR_MOBILE;
}
