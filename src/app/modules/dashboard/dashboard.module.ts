import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuglarMaterialModule } from '../angular-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NbComponentsModule } from '../nb-components.module';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCardComponent,
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AnuglarMaterialModule,
    NbComponentsModule,
    NgbModule
  ]
})
export class DashboardModule { }
