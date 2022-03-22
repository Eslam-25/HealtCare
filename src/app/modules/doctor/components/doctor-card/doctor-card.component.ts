import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendMessageDialogComponent } from '../../../shared/components/send-message-dialog/send-message-dialog.component';

@Component({
  selector: 'doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {

  message: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openMessageDialog(doctorId: number) {
    const dialogRef = this.dialog.open(SendMessageDialogComponent, {
      data: {
        title: 'استشر الطبيب',
        message: this.message
      },
    });
    
    dialogRef.componentInstance.onSend.subscribe((message: string) => {
      // send message to a doctor.

      dialogRef.close();
    });
  }

  openReservationDialog(doctorId: number) {
  }
}
