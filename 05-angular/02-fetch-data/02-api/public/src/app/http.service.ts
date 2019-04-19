import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemons();
  }

  getPokemons() {
    let tempObservable = this._http.get<PokeData>('https://pokeapi.co/api/v2/pokemon/1/');
    tempObservable.subscribe(data => {
      for (const i of data.abilities) {
        console.log(i.ability.name);
      }
      this.getCount(data.abilities[1].ability.url);
    });
  }

  getCount(url) {
    let tempObservable = this._http.get<Count>(url);
    tempObservable.subscribe(data => {
      console.log(data.pokemon.length + " pokemons have the " + data.name + " ability");

    });
  }
}

interface PokeData {
  abilities: Array<Ability>
}
interface Ability {
  ability: {
    name: String,
    url: String
  }
}
interface Count {
  name: String,
  pokemon: Array<Pokemon>
}
interface Pokemon {
  length: number
}