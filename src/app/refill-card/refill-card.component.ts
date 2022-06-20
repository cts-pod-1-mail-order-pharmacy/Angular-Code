import { Component, Input, OnInit } from '@angular/core';
import { RefillOrderLine } from '../refill-order-line';

@Component({
  selector: 'app-refill-card',
  templateUrl: './refill-card.component.html',
  styleUrls: ['./refill-card.component.css']
})
export class RefillCardComponent implements OnInit {

  @Input() refillDate;
  @Input() refillDateNext;
  @Input() refillOrderId;
  @Input() status;
  @Input() refillOrderLine:RefillOrderLine[]
  @Input() visited;
  constructor() { }

  ngOnInit(): void {
  }

}
