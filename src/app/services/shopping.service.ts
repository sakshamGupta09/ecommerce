import { computed, Injectable, Signal, signal } from '@angular/core';
import { of } from 'rxjs';
import { PRODUCTS } from '../../mocks/products';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private cartProducts = signal<IProduct[]>([]);

  private cartItemsCount: Signal<number> = computed(
    () => this.cartProducts().length
  );

  private subtotal: Signal<number> = computed(() => {
    let total = 0;
    this.cartProducts().forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  });

  public getCartItems() {
    return this.cartProducts;
  }

  public getCartItemsCount() {
    return this.cartItemsCount;
  }

  public getSubtotal() {
    return this.subtotal;
  }

  public addProduct(product: IProduct): void {
    for (let i = 0; i < this.cartProducts().length; i++) {
      if (this.cartProducts()[i].id === product.id) {
        return this.increaseQuantity(this.cartProducts()[i]);
      }
    }
    product.quantity = 1;
    this.cartProducts.set([...this.cartProducts(), product]);
  }

  public increaseQuantity(product: IProduct): void {
    product.quantity++;
    this.cartProducts.update((cart) => [...cart]);
  }

  public decreaseQuantity(product: IProduct): void {
    product.quantity--;
    if (product.quantity == 0) {
      return this.removeProduct(product.id);
    }
    this.cartProducts.update((cart) => [...cart]);
  }

  public removeProduct(productId: number): void {
    this.cartProducts.update((cart) =>
      cart.filter((product) => product.id !== productId)
    );
  }

  public getProducts() {
    return of(PRODUCTS);
  }
}
