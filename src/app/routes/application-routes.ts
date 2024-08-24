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
    path: 'order-completed',
    loadComponent: () =>
      import(
        '../order-completed/order-completed/order-completed.component'
      ).then((m) => m.OrderCompletedComponent),
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
];
