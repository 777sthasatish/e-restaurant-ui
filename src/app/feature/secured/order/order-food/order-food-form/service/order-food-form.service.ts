import { Injectable } from '@angular/core';
import { DynamicFormService, FieldsWithGroup } from '@prajna10/sd_design';
import { Observable } from 'rxjs';

import { OrderForm } from '../enum/order-form-keys';
@Injectable({
  providedIn: 'root'
})
export class OrderFoodFormService {

  constructor(private dynamicFormService: DynamicFormService) { }

  buildForm(): Observable<FieldsWithGroup> {
    return this.dynamicFormService.formGroup({
      [OrderForm.tableNo]: null,
      [OrderForm.quantity]: null
    });
  }
}
