import { Routes } from '@angular/router';

export const APPLICATION_ROUTES: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('../products/products-listing/products-listing.component').then(
        (m) => m.ProductsListingComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('../cart/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
];
