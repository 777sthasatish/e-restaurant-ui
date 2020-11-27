import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrl } from 'src/app/shared/constant/api-url-constant';

import { HttpClientService } from '../../../../core/service/http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClientService) { }


  checkOut(id: string): Observable<void> {
    return this.httpClient.patch(`${APIUrl.checkOutURL}/${id}`, null);
  }
}
