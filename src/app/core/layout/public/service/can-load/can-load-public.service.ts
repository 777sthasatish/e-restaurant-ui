import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, UrlTree } from '@angular/router';
import { RouteConstant } from '../../../../../shared/constant/route-constant';
import { localStorageConstant } from '../../../../../shared/constant/local-storage-constant';

const { key } = localStorageConstant;
const { accessToken } = key;
const { securedPageInitials } = RouteConstant;

@Injectable({
  providedIn: 'root'
})
export class CanLoadPublicService implements CanLoad {

  constructor(private router: Router) { }

  canLoad(
    route: Route,
    segments: import('@angular/router').UrlSegment[]
  ):
    | boolean
    | UrlTree
    | import('rxjs').Observable<boolean | UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    return this.isLoggedOut();
  }

  /**
   * This method allows to load public pages only if access token is not present
   */
  isLoggedOut(): boolean | UrlTree {
    return !!localStorage.getItem(accessToken) ? this.router.createUrlTree([securedPageInitials]) : true;
  }
}
