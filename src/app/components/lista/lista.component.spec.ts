import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListComponent } from './lista.component';

describe('ProductListComponent', () => {
  let component: ProductoListComponent;
  let fixture: ComponentFixture<ProductoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
