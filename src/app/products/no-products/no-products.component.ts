import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-products',
  standalone: true,
  imports: [],
  templateUrl: './no-products.component.html',
  styleUrl: './no-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoProductsComponent {

}
