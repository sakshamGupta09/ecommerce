import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyQuantityComponent } from './modify-quantity.component';

describe('ModifyQuantityComponent', () => {
  let component: ModifyQuantityComponent;
  let fixture: ComponentFixture<ModifyQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyQuantityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
