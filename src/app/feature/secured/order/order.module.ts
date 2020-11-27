import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { DynamicFormModule, GridModule, ItemLabelModule, ListItemsModule, SdTextInputModule } from '@prajna10/sd_design';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderFoodComponent } from './order-food/order-food.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderFoodFormComponent } from './order-food/order-food-form/order-food-form.component';
@NgModule({
  declarations: [OrderComponent, FoodMenuComponent, FoodCategoryComponent, FoodSearchComponent, OrderFoodComponent, OrderFoodFormComponent],
  imports: [
    CommonModule,
    GridModule,
    ListItemsModule,
    DynamicFormModule,
    SdTextInputModule,
    OrderRoutingModule,
    SharedModule,
    ItemLabelModule,
    NgbModule
  ]
})
export class OrderModule { }
