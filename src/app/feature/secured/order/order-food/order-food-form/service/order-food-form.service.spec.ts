import { TestBed } from '@angular/core/testing';

import { OrderFoodFormService } from './order-food-form.service';

describe('OrderFoodFormService', () => {
  let service: OrderFoodFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFoodFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
