import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorComponent } from './doctor.component';
import { NbComponentsModule } from '../nb-components.module';
import { SharedModule } from '../shared/shared.module';
import { AnuglarMaterialModule } from '../angular-material.module';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DoctorComponent,
    DoctorCardComponent,
    DoctorListComponent,
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DoctorRoutingModule,
    NbComponentsModule,
    SharedModule,
    AnuglarMaterialModule
  ]
})
export class DoctorModule { }
