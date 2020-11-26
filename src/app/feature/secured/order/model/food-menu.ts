import { Identity } from '../../../../shared/model/identity';

export interface FoodMenu extends Identity<number> {
  name: string;
  prepTime: string;
  price: number;
  status: boolean;
}
