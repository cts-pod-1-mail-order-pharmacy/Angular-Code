import { RefillOrderLine } from "./refill-order-line";

export class RefillOrder {
    refillOrderId:string;
    subscriptionId:string;
    refillDate:string;
    refillDateNext:string;
    refillStatus:boolean;
    refillVisited:boolean;
    refillOrderLine:RefillOrderLine[];
}
