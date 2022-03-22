import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  @Input() isLoading: boolean = false;
  @Output() onLoadingMore = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  loadMore(){
    this.isLoading = true;
    this.onLoadingMore.emit();
  }

}
