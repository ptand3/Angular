// The App module declares both the App Component and the other Applications component

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ApplicationInitStatus } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel directors lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Every Component must be declared in one NgModule exactly once 
// So during generation of the comp ,,CLI auomatically adds into ngModule
@NgModule({     
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
