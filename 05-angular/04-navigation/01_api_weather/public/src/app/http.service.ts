import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
    cities = {
        dc: 4140963,
        burbank: 4885983,
        chicago: 4887398,
        dallas: 4190598,
        sanjose: 5392171,
        seattle: 5809844,
    }
  constructor(private _http: Http) { }

  getWeather(city: string){
      return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.cities[city]}&units=imperial&appid=d6a4c9e3ab621168f3538baa54766827`)
      .pipe(map(data => data.json()))
      .toPromise();
  }
}