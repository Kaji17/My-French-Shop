import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';

const NGZORRO_MODULES = [
  NzIconModule,
  NzButtonModule,
  NzCarouselModule
]

@NgModule({
  exports: [
    ...NGZORRO_MODULES,
  ]
})
export class LibSharedModule { }
