import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/service/http-client/http-client.service';
import { APIUrl } from 'src/app/shared/constant/api-url-constant';

import { Order } from '../../model/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClientService) { }

  addOrder(order: Order): Observable<Order> {
    return this.httpClient.post(APIUrl.orderURL, order);
  }
}
