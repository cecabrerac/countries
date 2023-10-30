import {ViewEncapsulation} from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() dataCard: any;
  constructor() {}

  ngOnInit(): void {}
}
