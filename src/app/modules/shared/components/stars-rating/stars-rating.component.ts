import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss']
})
export class StarsRatingComponent implements OnInit {

  rate = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
