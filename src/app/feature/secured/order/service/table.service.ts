import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientService } from 'src/app/core/service/http-client/http-client.service';
import { APIUrl } from 'src/app/shared/constant/api-url-constant';

import { Table } from '../model/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClientService) { }

  getAll(): Observable<Table[]> {
    return this.httpClient.get<Table[]>(APIUrl.tableURL);
  }
}
