import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subtotal',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './subtotal.component.html',
  styleUrl: './subtotal.component.css',
})
export class SubtotalComponent {
  public subTotal = input.required<number>();
}
