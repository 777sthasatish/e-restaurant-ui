import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Order } from '../../order/model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnChanges {

  @Input() orders: Order[];

  @Output() itemSelect = new EventEmitter<Order>();

  @Input() activeItem: Order;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.orders) {
      this.setActiveItem(this.orders[0]);
    }
  }

  setActiveItem(activeItem: Order): void {
    this.activeItem = activeItem;
    this.itemSelect.emit(activeItem);
  }

  onItemSelect(order: Order): void {
    this.setActiveItem(order);
  }
}
