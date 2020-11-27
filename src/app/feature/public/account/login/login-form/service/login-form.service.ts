import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginFieldKeys } from '../enum/login-field-keys';;

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private formBuilder: FormBuilder) { }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      [LoginFieldKeys.username]: null,
      [LoginFieldKeys.password]: null
    });
  }
}
