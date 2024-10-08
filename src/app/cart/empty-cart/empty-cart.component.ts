import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './empty-cart.component.html',
  styleUrl: './empty-cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EmptyCartComponent {

}
