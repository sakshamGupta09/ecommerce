import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListingComponent } from './products-listing.component';

describe('ProductsListingComponent', () => {
  let component: ProductsListingComponent;
  let fixture: ComponentFixture<ProductsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
