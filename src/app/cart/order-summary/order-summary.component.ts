import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSummaryComponent {

}
