import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotlightComponent } from './components/dotlight/dotlight.component';
import { SendMessageDialogComponent } from './components/send-message-dialog/send-message-dialog.component';
import { NbComponentsModule } from '../nb-components.module';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { BarRatingModule } from "ngx-bar-rating";
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';

@NgModule({
  declarations: [
    DotlightComponent,
    SendMessageDialogComponent,
    BreadCrumbComponent,
    StarsRatingComponent,
    EvaluationComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbComponentsModule,
    BarRatingModule
  ],
  exports: [
    DotlightComponent,
    SendMessageDialogComponent,
    BreadCrumbComponent,
    StarsRatingComponent,
    EvaluationComponent,
    LoadMoreComponent
  ]
})
export class SharedModule { }
