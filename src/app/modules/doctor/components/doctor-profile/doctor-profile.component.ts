import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../shared/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'ngx-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {

  breadCrumbs: BreadCrumb[] = [
    { url: "#", title: "استشارات طبية", isLast: false },
    { url: "#", title: "أطفال", isLast: true },
  ];

  rating = 4.5;

  
  constructor() { }

  ngOnInit(): void {
  }

  isLoading: boolean = false;
  onLoadingMore(){}

}
