import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../shared/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'ngx-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  breadCrumbs: BreadCrumb[] = [
    { url: "#", title: "استشارات طبية", isLast: false },
    { url: "#", title: "أطفال", isLast: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
