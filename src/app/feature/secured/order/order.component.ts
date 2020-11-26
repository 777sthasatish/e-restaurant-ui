import { Component, OnInit } from '@angular/core';
import { BreakPoints, Grid, GridItem } from '@prajna10/sd_design';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  grid: BreakPoints<Grid>;
  searchBar: BreakPoints<GridItem>;
  category: BreakPoints<GridItem>;
  foodMenu: BreakPoints<GridItem>;

  constructor() { }

  ngOnInit(): void {
    this.initGrid();
    this.initGridItems();
  }

  initGrid(): void {
    this.grid = {
      default: {
        rows: '5rem 1fr',
        columns: '[category-start] 25rem [category-end full-start] repeat(10, [col-start] 1fr [col-end])  25rem [full-end]',
        gap: '1rem'
      }
    };
  }

  initGridItems(): void {
    this.initSearchBar();
    this.initCategory();
    this.initFoodMenu();
  }

  initSearchBar(): void {
    this.searchBar = {
      default: {
        column: 'col-start 2 / col-end 11'
      }
    };
  }

  initCategory(): void {
    this.category = {
      default: {
        column: 'category-start / category-end'
      }
    };
   }

  initFoodMenu(): void {
    this.foodMenu = {
      default: {
        column: 'full-start / full-end'
      }
    }
   }

}
