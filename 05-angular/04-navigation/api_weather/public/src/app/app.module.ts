import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
