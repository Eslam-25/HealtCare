import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbInputModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbTabsetModule,
    NbSpinnerModule
  ],
  exports: [
    NbCardModule,
    NbInputModule,
    NbTabsetModule,
    NbSpinnerModule
  ]
})
export class NbComponentsModule { }
