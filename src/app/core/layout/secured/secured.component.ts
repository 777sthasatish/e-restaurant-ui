import { Component, OnInit } from '@angular/core';
import { BreakPoints, Grid, GridItem } from '@prajna10/sd_design';

@Component({
  selector: 'app-secured',
  templateUrl: './secured.component.html',
  styleUrls: ['./secured.component.scss']
})
export class SecuredComponent implements OnInit {

  grid: BreakPoints<Grid>;
  sideBar: BreakPoints<GridItem>;
  header: BreakPoints<GridItem>;
  breadcrumb: BreakPoints<GridItem>;
  main: BreakPoints<GridItem>;

  constructor() { }

  ngOnInit(): void {
    this.initGrid();
    this.initGridItems();
  }

  initGrid(): void {
    this.grid = {
      default: {
        rows: '6rem 3.5rem calc(100vh - 9.5rem)',
        columns: '[sidebar-start] 24rem [sidebar-end full-start] repeat(11, [col-start] 1fr [col-end]) [full-end]'
      }
    };
  }

  initGridItems(): void {
    this.initSideBar();
    this.initMain();
  }

  initSideBar(): void {
    this.sideBar = {
      default: {
        row: '1 / -1',
        column: 'sidebar-start / sidebar-end'
      }
    };
  }


  initMain(): void {
    this.main = {
      default: {
        row: '1 / -1',
        column: 'full-start / full-end'
      }
    };
  }
}
