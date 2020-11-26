import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FoodMenu } from '../model/food-menu';
import { Table } from '../model/table';

import { TableService } from '../service/table.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {

  @Input() foodMenu: FoodMenu;

  tables: Table[];
  tableNos: string[];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.initTables();
  }

  initTables(): void {
    this.tableService.getAll()
      .subscribe((tables: Table[]) => {
        this.tables = tables;
        this.tableNos = this.tables.map(table => table.tableNo);
      });
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      switchMap(text => {
        if (!text) {
          return of(this.tableNos);
        }
        return of(this.tableNos
          .filter(tableNo => tableNo.toLowerCase().includes(text.toLowerCase())));
      }));
  }
}
