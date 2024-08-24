import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'layout',
    loadComponent: () =>
      import('./layout/layout/layout.component').then((m) => m.LayoutComponent),
    loadChildren: () =>
      import('./routes/application-routes').then((m) => m.APPLICATION_ROUTES),
  },

  { path: '', redirectTo: '/layout/products', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
