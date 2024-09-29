import { Routes } from '@angular/router';

export const acuueiRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import("../../pages/accueil/accueil.module").then((m) => m.AccueilModule)
  }
]
