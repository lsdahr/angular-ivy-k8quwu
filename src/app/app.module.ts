import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot ([
      {path: '', component: HomeComponent},
      {path: 'greeting', component: GreetingComponent},
      {path: 'random', component: RandomComponent},
    ])
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, GreetingComponent, HomeComponent, RandomComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
