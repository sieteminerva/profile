import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

export interface IMinervaIndicatorItem {
  title: string;
  value: number;
  description: string;
}

@Component({
  selector: 'minerva-round-indicator',
  templateUrl: './round-indicator.component.html',
  styleUrls: ['./round-indicator.component.scss']
})
export class RoundIndicatorComponent implements AfterViewInit {
  @Input() item: IMinervaIndicatorItem;
  constructor() {

  }

  ngAfterViewInit() {

  }

}
