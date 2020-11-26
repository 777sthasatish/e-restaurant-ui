import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from 'src/app/shared/constant/route-constant';
import { SecuredComponent } from './secured.component';

const { dashboard, order, payment } = RouteConstant;

const routes: Routes = [
  {
    path: '', component: SecuredComponent,
    children: [
      {
        path: dashboard, loadChildren: () => import('../../../feature/secured/dashboard/dashboard.module')
          .then(module => module.DashboardModule)
      },
      {
        path: order, loadChildren: () => import('../../../feature/secured/order/order.module')
          .then(module => module.OrderModule)
      },
      {
        path: payment, loadChildren: () => import('../../../feature/secured/payment/payment.module')
          .then(module => module.PaymentModule)
      },
      {
        path: '', pathMatch: 'full', redirectTo: dashboard
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuredRoutingModule { }
