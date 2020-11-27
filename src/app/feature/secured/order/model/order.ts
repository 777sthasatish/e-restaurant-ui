import { FoodMenu, } from './food-menu';
import { Table, } from './table';

export interface Order {
  foodMenu?: FoodMenu;
  quantity?: number;
  table?: Table;
}
