import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { GridModule, ItemLabelModule, ListItemsModule, SdTableModule } from '@prajna10/sd_design';
import { OrderListComponent } from './order-list/order-list.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';


@NgModule({
  declarations: [PaymentComponent, OrderListComponent, PaymentSummaryComponent],
  imports: [
    SdTableModule,
    CommonModule,
    GridModule,
    ListItemsModule,
    ItemLabelModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
