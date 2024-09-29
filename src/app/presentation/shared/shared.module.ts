import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoDeliveryComponent } from './components/info-delivery/info-delivery.component';
import { ContentComponent } from './components/layout/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LibSharedModule } from './lib-shared/lib-shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StoresComponent } from './components/stores/stores.component';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [
  NavbarComponent,
  ContentComponent,
  InfoDeliveryComponent,
  ToolbarComponent,
  StoresComponent,
  HeaderComponent,

]
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    LibSharedModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
