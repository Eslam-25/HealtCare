import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    children: [
      {
        path: 'list',
        component: DoctorListComponent
      },
      {
        path: 'profile',
        component: DoctorProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {
}
