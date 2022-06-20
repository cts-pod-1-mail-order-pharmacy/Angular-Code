import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './dashboared/card/card.component';
import { DashboardComponent } from './dashboared/dashboard/dashboard.component';
import { SubscriptionComponent } from './dashboared/subscription/subscription.component';
import { ViewComponent } from './dashboared/view/view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PostRefillComponent } from './post-refill/post-refill.component';
import { RefillDescriptionComponent } from './refill-description/refill-description.component';
import { RefillStatusComponent } from './refill-status/refill-status.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"subscribe",component:SubscriptionComponent},
  {path:"viewsubscriptions",component:ViewComponent},
  {path:"viewRefillStatus",component:RefillStatusComponent},
  {path:"viewRefillStatus/openSubscription/:id", component:RefillDescriptionComponent},
  {path:"applyRefill",component:PostRefillComponent},
  {path:"",component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
