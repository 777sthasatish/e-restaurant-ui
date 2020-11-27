import { Component, Input, OnInit } from '@angular/core';
import { FoodMenu } from '../model/food-menu';
import { Order } from '../model/order';

import { OrderService } from './service/order.service';
@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {

  @Input() foodMenu: FoodMenu;
  @Input() showModal: boolean;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  addOrder(orderValue: Order): void {
    orderValue.foodMenu = this.foodMenu;
    this.orderService.addOrder(orderValue)
      .subscribe(console.log);
  }
}
