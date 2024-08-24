import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PRODUCTS } from '../../mocks/products';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor() {}

  public getProducts() {
    return of(PRODUCTS);
  }
}
