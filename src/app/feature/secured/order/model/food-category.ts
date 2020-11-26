import { Identity } from '../../../../shared/model/identity';
import { FoodMenu } from './food-menu';

export interface FoodCategory extends Identity<number> {
  name: string;
  menus: FoodMenu[];
}
