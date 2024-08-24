import { Component, OnInit, signal } from '@angular/core';
import { IProduct } from '../../models/product';
import { ShoppingService } from '../../services/shopping.service';
import { ProductComponent } from '../product/product.component';
import { NoProductsComponent } from '../no-products/no-products.component';

@Component({
  selector: 'app-products-listing',
  standalone: true,
  imports: [ProductComponent, NoProductsComponent],
  templateUrl: './products-listing.component.html',
  styleUrl: './products-listing.component.css',
})
export class ProductsListingComponent implements OnInit {
  public products = signal<IProduct[]>([]);

  public isLoading = signal<boolean>(false);

  constructor(private service: ShoppingService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.service.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }
}
