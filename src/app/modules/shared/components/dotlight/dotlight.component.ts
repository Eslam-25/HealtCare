import { Component, Input, OnInit } from '@angular/core';

enum DotlightEnum {
  online,
  offline,
  busy
}

@Component({
  selector: 'dots-light',
  templateUrl: './dotlight.component.html',
  styleUrls: ['./dotlight.component.scss']
})
export class DotlightComponent implements OnInit {

  @Input() type: DotlightEnum;
  constructor() { }

  ngOnInit(): void {
  }

  getClasses() {
    if (this.type == DotlightEnum.online) return "availability-status online";
    else if (this.type == DotlightEnum.offline) return "availability-status offline";
    else return "availability-status busy";
  }

}
