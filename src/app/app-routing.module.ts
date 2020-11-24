import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConstant } from './shared/constant/route-constant';
import { CanLoadPublicService } from './core/layout/public/service/can-load/can-load-public.service';
import { CanLoadSecuredService } from './core/layout/secured/service/can-load/can-load-secured.service';


const { login, securedPageInitials } = RouteConstant;

const routes: Routes = [
  {
    path: login, loadChildren: () => import('./core/layout/public/public.module').then(module => module.PublicModule),
    canLoad: [CanLoadPublicService]
  },
  {
    path: securedPageInitials, loadChildren: () => import('./core/layout/secured/secured.module').then(module => module.SecuredModule),
    canLoad: [CanLoadSecuredService]
  },
  {
    path: '', pathMatch: 'prefix', redirectTo: login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
