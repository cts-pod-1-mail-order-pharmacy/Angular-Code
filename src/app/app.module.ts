import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboaredModule } from './dashboared/dashboared.module';
import { RefillStatusComponent } from './refill-status/refill-status.component';
import { RefillDescriptionComponent } from './refill-description/refill-description.component';
import { RefillCardComponent } from './refill-card/refill-card.component';
import { PostRefillComponent } from './post-refill/post-refill.component';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RefillStatusComponent,
    RefillDescriptionComponent,
    RefillCardComponent,
    PostRefillComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DashboaredModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
