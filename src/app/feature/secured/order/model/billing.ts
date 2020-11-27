import { Identity } from '../../../../shared/model/identity';
export interface Billing extends Identity<number> {
  total?: number;
  paymentDate?: Date;
  status?: boolean;
}
