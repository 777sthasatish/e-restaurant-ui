import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule, DynamicFormModule, SdTextInputModule } from '@prajna10/sd_design';
import { MessageBoxComponent } from './login/message-box/message-box.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginTagComponent } from './login/login-tag/login-tag.component';
@NgModule({
  declarations: [AccountComponent, LoginComponent, MessageBoxComponent, LoginFormComponent, LoginTagComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    SdTextInputModule,
    ButtonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
