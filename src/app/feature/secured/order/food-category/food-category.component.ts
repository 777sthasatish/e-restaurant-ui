import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodCategory } from '../model/food-category';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss']
})
export class FoodCategoryComponent implements OnInit {

  @Input() categories: FoodCategory[];
  @Output() categorySelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemSelect(category: FoodCategory): void {
    this.categorySelect.emit(category.id + '');
  }

}
