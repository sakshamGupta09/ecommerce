import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProduct } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  public product = input.required<IProduct>();

  constructor(private service: ShoppingService) {}

  public addtoCartHandler(): void {
    this.service.addProduct(this.product());
  }
}
