import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/service/http-client/http-client.service'
import { APIUrl } from 'src/app/shared/constant/api-url-constant';

import { FoodCategory } from '../model/food-category';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {

  constructor(private httpClient: HttpClientService) { }

  getAll(): Observable<FoodCategory[]> {
    return this.httpClient.get(APIUrl.foodMenuURL);
  }
}
