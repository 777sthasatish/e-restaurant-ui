import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/service/http-client/http-client.service';
import { APIUrl } from 'src/app/shared/constant/api-url-constant';

import { Order } from '../../model/order';

const { orderURL } = APIUrl;
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClientService) { }

  addOrder(order: Order): Observable<Order> {
    return this.httpClient.post(orderURL, order);
  }

  getAll(): Observable<Order[]> {
    return this.httpClient.get(orderURL);
  }

  getAllBy(tableId: string): Observable<Order[]> {
    return this.httpClient.get(`${orderURL}/${tableId}`);
  }
}
