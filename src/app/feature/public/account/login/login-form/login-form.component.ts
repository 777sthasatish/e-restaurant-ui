import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@prajna10/sd_design';
import { SubSink } from 'subsink';

import { LoginFormService } from './service/login-form.service';
import { LoginService } from './service/login.service';
import { LocalStorageService } from '../../.../../../../../core/service/storage-service/local-storage.service';
import { OAuth2AccessToken } from 'src/app/shared/model/oauth2-access-token';
import { Router } from '@angular/router';
import { RouteConstant } from 'src/app/shared/constant/route-constant';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  username: Field;
  password: Field;
  formGroup: FormGroup;
  subSink = new SubSink();

  constructor(
    private router: Router,
    private formService: LoginFormService,
    private loginService: LoginService,
    private storageService: LocalStorageService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.subSink.sink = this.formService.buildForm()
      .subscribe(({ fields, formGroup }) => {
        [this.username, this.password] = fields;
        this.formGroup = formGroup;
      });
  }

  login(): void {
    this.loginService.login(this.formGroup.value)
      .subscribe((token: OAuth2AccessToken) => {
        this.storageService.set('accessToken', token.access_token);
        this.router.navigate([RouteConstant.dashboardFull]);
      });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
