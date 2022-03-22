import { Component, Input, OnInit } from '@angular/core';

export class BreadCrumb {
  title: string;
  url: string;
  isLast: boolean = false;
}

@Component({
  selector: 'bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input() breadCrumbs: BreadCrumb[] = [];
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbs.unshift({ url: "/", title: "الرئيسية", isLast: false });
  }

  getClass(breadCrumb: BreadCrumb) {
    let className = "breadcrumb-item"
    if (breadCrumb.isLast)
      className += " active";
    return className;
  }

}
