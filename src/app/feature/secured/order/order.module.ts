import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { GridModule, ListItemsModule, SdTextInputModule } from '@prajna10/sd_design';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { FoodSearchComponent } from './food-search/food-search.component';


@NgModule({
  declarations: [OrderComponent, FoodMenuComponent, FoodCategoryComponent, FoodSearchComponent],
  imports: [
    CommonModule,
    GridModule,
    ListItemsModule,
    SdTextInputModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
