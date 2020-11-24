import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from 'src/app/shared/constant/route-constant';
import { SecuredComponent } from './secured.component';

const { dashboard } = RouteConstant;

const routes: Routes = [
  {
    path: '', component: SecuredComponent,
    children: [
      {
        path: dashboard, loadChildren: () => import('../../../feature/secured/dashboard/dashboard.module')
          .then(module => module.DashboardModule)
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
