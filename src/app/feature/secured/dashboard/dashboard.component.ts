import { Component, OnInit } from '@angular/core';
import { DashboardMetric } from './model/dashboard-metrics';
import { DashboardService } from './service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardMetrics: DashboardMetric;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.initMetrics();
  }

  initMetrics(): void {
    this.dashboardService.getMetrics()
      .subscribe(value => {
        this.dashboardMetrics = value;
      });
  }
}
