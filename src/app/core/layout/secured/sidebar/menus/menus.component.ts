import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/service/storage-service/local-storage.service';
import { RouteConstant } from 'src/app/shared/constant/route-constant';
import { Menu } from './model/menu';
import { MenuService } from './service/menu.service';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  $menus: Observable<Menu[]>;

  constructor(private storageService: LocalStorageService, private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.initMenus();
  }

  initMenus(): void {
    this.$menus = this.menuService.getMenus();
  }

  onLogOutClick(): void {
    this.storageService.clear();
    this.router.navigate([RouteConstant.login]);
  }
}
