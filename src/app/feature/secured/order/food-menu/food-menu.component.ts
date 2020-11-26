import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { FoodCategory } from '../model/food-category';
import { FoodMenu } from '../model/food-menu';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit, OnChanges {

  @Input() categories: FoodCategory[];

  @Input() scrollTo: string;

  @Output() menuSelect = new EventEmitter<FoodMenu>();


  showDialog: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.scrollTo) {
      document.getElementById(this.scrollTo).scrollIntoView({behavior: 'smooth'});
    }
  }

  toggleModal(value: boolean): void {
    this.showDialog = value;
  }

  onMenuSelect(foodMenu: FoodMenu): void {
    this.menuSelect.emit(foodMenu);
  }

}
