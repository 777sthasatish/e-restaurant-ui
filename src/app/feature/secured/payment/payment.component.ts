import { Component, OnInit } from '@angular/core';
import { BreakPoints, DataSource, Grid, GridItem } from '@prajna10/sd_design';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { Order } from '../order/model/order';
import { OrderService } from '../order/order-food/service/order.service';
import { PaymentService } from './service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  grid: BreakPoints<Grid>;
  orderGridItem: BreakPoints<GridItem>;
  paymentGridItem: BreakPoints<GridItem>;

  orders: Order[];
  $paymentSummary: Observable<Order[]>;

  dataSource: DataSource<Order>;


  constructor(private orderService: OrderService, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.initGrid();
    this.initGridItems();
    this.initOrders();
  }

  initGrid(): void {
    this.grid = {
      default: {
        rows: '5rem 1fr',
        columns: '[order-start] 25rem [order-end full-start] repeat(10, [col-start] 1fr [col-end])  25rem [full-end]',
        gap: '1rem'
      }
    };
  }

  initGridItems(): void {
    this.initOrder();
    this.initPayment();
  }


  initOrder(): void {
    this.orderGridItem = {
      default: {
        row: '2 / -1',
        column: 'order-start / order-end'
      }
    };
  }

  initPayment(): void {
    this.paymentGridItem = {
      default: {
        row: '2 / -1',
        column: 'full-start / full-end'
      }
    };
  }

  initOrders(): void {
    this.orderService.getAll()
      .subscribe((value: Order[]) => {
        this.orders = value;
      });
  }

  initDataSource(id: string): void {
    this.orderService.getAllBy(id)
      .subscribe(value => {
        this.dataSource = {
          columns: ['S.N.', 'Table No.', 'Item name', 'Rate', 'Quantity', 'Total'],
          data: value
        };
      });
  }

  checkout(id: string): void {
    this.paymentService.checkOut(id)
      .pipe(
        switchMap(() => this.orderService.getAll())
      ).subscribe((value: Order[]) => {
        this.orders = value;
    });
  }
}
