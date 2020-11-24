import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, UrlTree } from '@angular/router';
import { RouteConstant } from 'src/app/shared/constant/route-constant';
import { localStorageConstant } from '../../../../../shared/constant/local-storage-constant';

const { key } = localStorageConstant;
const { accessToken } = key;
const { login } = RouteConstant;

@Injectable({
  providedIn: 'root'
})
export class CanLoadSecuredService implements CanLoad {
  constructor(private router: Router) { }
  canLoad(
    route: Route,
    segments: import('@angular/router').UrlSegment[]
  ):
    | boolean
    | UrlTree
    | import('rxjs').Observable<boolean | UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    return this.isLoggedIn();
  }

  /**
   * This method allows to load secured pages only if access token is present
   */
  isLoggedIn(): boolean | UrlTree {
    return localStorage.getItem(accessToken) ? true : this.router.createUrlTree([login]);
  }
}
