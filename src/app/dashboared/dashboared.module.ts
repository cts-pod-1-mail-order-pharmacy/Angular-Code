import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboaredRoutingModule } from './dashboared-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    ViewComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    DashboaredRoutingModule,
    FormsModule
  ]
})
export class DashboaredModule { }
