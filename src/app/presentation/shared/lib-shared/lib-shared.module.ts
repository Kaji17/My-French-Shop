import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';


const NGZORRO_MODULES = [
  NzIconModule,
  NzButtonModule,
  NzCarouselModule,
  NzDividerModule
]

@NgModule({
  exports: [
    ...NGZORRO_MODULES,
  ]
})
export class LibSharedModule { }
