import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import * as fromPlayers from './players';
import { NavComponent } from './nav/nav.component';
import { Game2Component } from './players/game2/game2.component';
import { Game3Component } from './players/game3/game3.component';
import { Game1Component } from './players/game1/game1.component';



@NgModule({
  declarations: [
    AppComponent,
    ...fromPlayers.components,
    NavComponent,
    Game2Component,
    Game3Component,
    Game1Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
