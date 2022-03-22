import { Component, OnInit } from '@angular/core';
import { DashboardModel } from '../../models/dashboard.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbCarouselConfig]
})
export class DashboardComponent implements OnInit {





  dashboardModel: DashboardModel[] = [
    {
      categoryName: "استشارات طبية",
      departments: [
        {id: 1, name: "جلدية", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 25"},
        {id: 1, name: "اطفال", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 10"},
        {id: 1, name: "انف واذن", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 7"},
        {id: 1, name: "اسنان", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 5"},
      ]
    },
    {
      categoryName: "استشارات هندسية",
      departments: [
        {id: 1, name: "مدنى", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد المهندسين : 10"},
        {id: 1, name: "معمارى", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد المهندسين : 5"},
      ]
    }
  ];




  ngOnInit(): void {
  }

}
