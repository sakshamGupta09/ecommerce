import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-completed',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-completed.component.html',
  styleUrl: './order-completed.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderCompletedComponent {

}
