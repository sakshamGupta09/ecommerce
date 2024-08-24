import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProductsComponent } from './no-products.component';

describe('NoProductsComponent', () => {
  let component: NoProductsComponent;
  let fixture: ComponentFixture<NoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
