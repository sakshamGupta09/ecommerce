import { Component, inject } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { EmptyCartComponent } from '../empty-cart/empty-cart.component';
import { CurrencyPipe, NgTemplateOutlet } from '@angular/common';
import { ModifyQuantityComponent } from '../modify-quantity/modify-quantity.component';
import { IProduct } from '../../models/product';
import { SubtotalComponent } from '../subtotal/subtotal.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    EmptyCartComponent,
    NgTemplateOutlet,
    CurrencyPipe,
    ModifyQuantityComponent,
    SubtotalComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private service = inject(ShoppingService);

  public cartItems = this.service.getCartItems();

  public subTotal = this.service.getSubtotal();

  public removeClickHandler(productId: number): void {
    this.service.removeProduct(productId);
  }

  public incrementHandler(product: IProduct): void {
    this.service.increaseQuantity(product);
  }

  public decrementHandler(product: IProduct): void {
    this.service.decreaseQuantity(product);
  }
}
