import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DataSource } from '@prajna10/sd_design';
import { Order } from '../../order/model/order';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss']
})
export class PaymentSummaryComponent implements OnInit, OnChanges {

  @Input() dataSource: DataSource<Order>;
  @Input() grandTotal: string;

  @Output() checkout = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.dataSource) {
      this.grandTotal = `NRs.${this.dataSource.data.reduce((acc, value) => acc = acc + value.quantity * value.foodMenu.price, 0)}`;
     }
  }

  onCheckout(): void {
    if (this.dataSource && this.dataSource.data) {
      this.checkout.emit(this.dataSource.data[0].billing.id + '');
    }
  }
}
