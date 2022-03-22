import { Component, OnInit } from '@angular/core';
import { DashboardModel } from '../../models/dashboard.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ImageCarouselModel } from '../image-carousel/image-carousel.component';

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
        { id: 1, name: "جلدية", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 25" },
        { id: 1, name: "اطفال", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 10" },
        { id: 1, name: "انف واذن", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 7" },
        { id: 1, name: "اسنان", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد الدكاترة : 5" },
      ]
    },
    {
      categoryName: "استشارات هندسية",
      departments: [
        { id: 1, name: "مدنى", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد المهندسين : 10" },
        { id: 1, name: "معمارى", imageUrl: "../../../../../assets/images/alan.png", nOfConsultant: "عدد المهندسين : 5" },
      ]
    }
  ];

  images: ImageCarouselModel[] = [
    {
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWtbm9-kDaRQu-fBn1wa8M3zw3G87HAf7zA&usqp=CAU",
      imageTitle: "",
      imageDescription: "",
    },
    {
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFPaYBLQhl6kH2_IEaAm8W9eUgTpEDTkYzw&usqp=CAU",
      imageTitle: "اعتني بصحتك جيدا",
      imageDescription: "الاعتناء مهم جدا هذا الايام",
    },
    {
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTQP6Tk2HTO1_XJZ1kSw-2dtkgWk0GRQ5yg&usqp=CAU",
      imageTitle: "اسنانك مهمة جدا",
      imageDescription: "الاعتناء مهم جدا هذا الايام",
    }
  ];

  ngOnInit(): void {
  }

}
