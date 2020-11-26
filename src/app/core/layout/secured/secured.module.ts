import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredRoutingModule } from './secured-routing.module';
import { SecuredComponent } from './secured.component';
import { GridModule, SideBarModule } from '@prajna10/sd_design';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenusComponent } from './sidebar/menus/menus.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SecuredComponent, SidebarComponent, MenusComponent],
  imports: [
    CommonModule,
    SecuredRoutingModule,
    GridModule,
    SideBarModule,
    SharedModule
  ]
})
export class SecuredModule { }
