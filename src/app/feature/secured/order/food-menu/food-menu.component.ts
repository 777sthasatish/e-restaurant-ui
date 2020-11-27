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

  @Input() showDialog: boolean;


  @Output() menuSelect = new EventEmitter<FoodMenu>();

  @Output() closeModal = new EventEmitter<boolean>();

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
    this.closeModal.emit(value);
  }

  onMenuSelect(foodMenu: FoodMenu): void {
    this.menuSelect.emit(foodMenu);
  }
}
