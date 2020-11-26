import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/service/http-client/http-client.service';
import { APIUrl } from 'src/app/shared/constant/api-url-constant';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClientService) { }

  getMenus(): Observable<Menu[]> {
    const httpParams = new HttpParams()
      .set('enabled', 'true');
    return this.httpClient.get(APIUrl.menuURL, httpParams);
  }
}
