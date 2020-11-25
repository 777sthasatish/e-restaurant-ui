import { Injectable } from '@angular/core';
import { DynamicFormService, FieldsWithGroup } from '@prajna10/sd_design';
import { Observable } from 'rxjs';

import { LoginFieldKeys } from '../enum/login-field-keys';;

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private dynamicFormService: DynamicFormService) { }

  buildForm(): Observable<FieldsWithGroup> {
    return this.dynamicFormService.formGroup({
      [LoginFieldKeys.username]: null,
      [LoginFieldKeys.password]: null
    });
  }
}
