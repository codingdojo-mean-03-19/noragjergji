import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-city',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit, OnDestroy {
    weather:Object = {};
    subscription: any;
    constructor(private _weatherService: HttpService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.getWeather();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getWeather() {
      this._route.paramMap
        .pipe(switchMap(params => {
            return this._weatherService.getWeather(params.get('city'))
        }))
        .subscribe(weather => this.weather = weather)
    }
}