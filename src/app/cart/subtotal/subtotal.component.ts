import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-subtotal',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './subtotal.component.html',
  styleUrl: './subtotal.component.css',
})
export class SubtotalComponent {
  public subTotal = input.required<number>();
}
