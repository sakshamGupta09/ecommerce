import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, BadgeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public cartItemsCount = this.service.getCartItemsCount();

  constructor(private service: ShoppingService) {}
}
