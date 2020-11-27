import { FoodMenu } from './food-menu';
import { Table } from './table';
import { Billing } from './billing';


export interface Order {
  foodMenu?: FoodMenu;
  quantity?: number;
  table?: Table;
  billing?: Billing;
}
