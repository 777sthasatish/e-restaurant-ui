import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredRoutingModule } from './secured-routing.module';
import { SecuredComponent } from './secured.component';
import { GridModule } from '@prajna10/sd_design';


@NgModule({
  declarations: [SecuredComponent],
  imports: [
    CommonModule,
    SecuredRoutingModule,
    GridModule
  ]
})
export class SecuredModule { }
