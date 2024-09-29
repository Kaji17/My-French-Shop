import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './presentation/shared/components/layout/content/content.component';
import { acuueiRoutes } from './presentation/shared/routes/accueil.routes';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      ...acuueiRoutes
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
