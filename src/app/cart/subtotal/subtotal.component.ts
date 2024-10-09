import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-subtotal',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './subtotal.component.html',
  styleUrl: './subtotal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubtotalComponent {
  public subTotal = input.required<number>();

  private service = inject(ShoppingService);

  private router = inject(Router);

  public placeOrderHandler(): void {
    this.service.resetCart();
    this.router.navigate(['/order-completed']);
  }
}
