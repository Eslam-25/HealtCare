import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuglarMaterialModule } from '../angular-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NbComponentsModule } from '../nb-components.module';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AnuglarMaterialModule,
    NbComponentsModule
  ]
})
export class DashboardModule { }
