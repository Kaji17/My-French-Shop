import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './presentation/shared/components/layout/content/content.component';
import { acuueiRoutes } from './presentation/shared/routes/accueil.routes';
import { securityRoutes } from './presentation/shared/routes/security.routes';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      ...acuueiRoutes
    ]
  },
  ...securityRoutes,
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
