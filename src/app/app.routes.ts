import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./site/layout/layout-component').then((m) => m.LayoutComponent),
  },
];
