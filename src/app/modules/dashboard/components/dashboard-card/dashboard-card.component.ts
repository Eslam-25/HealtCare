import { Component, Input, OnInit } from '@angular/core';
import { DashboardModel } from '../../models/dashboard.model';

@Component({
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() dashboardModel: DashboardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
