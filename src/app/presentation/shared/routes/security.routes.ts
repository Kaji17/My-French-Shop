import { Routes } from "@angular/router";

export const securityRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../../pages/security/security.module').then((m) => m.SecurityModule)
  }
]
