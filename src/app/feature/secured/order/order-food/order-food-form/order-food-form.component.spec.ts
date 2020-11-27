import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFoodFormComponent } from './order-food-form.component';

describe('OrderFoodFormComponent', () => {
  let component: OrderFoodFormComponent;
  let fixture: ComponentFixture<OrderFoodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFoodFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
