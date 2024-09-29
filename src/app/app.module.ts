import { SharedModule } from './presentation/shared/shared.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { HTTP_REPOSITORIES_ADAPTERS } from './infrastructure/core-http-adapter';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    { provide: NZ_I18N, useValue: fr_FR },
    provideAnimationsAsync(),
    provideHttpClient(),
    ...HTTP_REPOSITORIES_ADAPTERS
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
