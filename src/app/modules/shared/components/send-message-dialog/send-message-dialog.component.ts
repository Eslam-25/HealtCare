import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export class MessageDilaog{
  title: string;
  message: string;
}

@Component({
  selector: 'send-message-dialog',
  templateUrl: './send-message-dialog.component.html',
  styleUrls: ['./send-message-dialog.component.scss']
})
export class SendMessageDialogComponent implements OnInit {

  @Output() onSend = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<SendMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageDilaog) {}

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close(this.data.message);
  }

  send(): void{
    this.onSend.emit(this.data.message);
  }
}
