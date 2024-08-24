import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modify-quantity',
  standalone: true,
  imports: [],
  templateUrl: './modify-quantity.component.html',
  styleUrl: './modify-quantity.component.css',
})
export class ModifyQuantityComponent {
  public quantity = input.required<number>();

  public increment = output<void>();

  public decrement = output<void>();

  public incrementHandler(): void {
    this.increment.emit();
  }

  public decrementHandler(): void {
    this.decrement.emit();
  }
}
