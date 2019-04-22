import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {HttpService} from './http.service'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
