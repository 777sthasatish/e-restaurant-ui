import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FoodCategory } from '../model/food-category';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit, OnChanges {

  @Input() categories: FoodCategory[];

  @Input() scrollTo: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.scrollTo) {
      document.getElementById(this.scrollTo).scrollIntoView({behavior: 'smooth'});
    }
  }

}
