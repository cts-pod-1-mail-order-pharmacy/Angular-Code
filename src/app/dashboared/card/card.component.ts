import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name = '';
  @Input() manufacturer = '';
  @Input() drugId = '';
  @Input() packages = '';
  @Input() manfDate = '';
  @Input() expiryDate = '';
  @Input() drugDetails:any = [];
  @Input() cost = '';

  constructor() { }

  ngOnInit(): void {
  }

}
