import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/service/http-client/http-client.service';
import { APIUrl } from 'src/app/shared/constant/api-url-constant';

import { DashboardMetric } from '../model/dashboard-metrics';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClientService) { }

  getMetrics(): Observable<DashboardMetric> {
    return this.httpClient.get(APIUrl.dashboardURL);
  }
}
