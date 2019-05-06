import { Component } from '@angular/core';
import { Player } from './models';
import {NgForm} from '@angular/forms';
import { PLAYERS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  player = new Player();
  players: Player[] = PLAYERS;

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('Submitting Form', this.player);
    this.players.push(this.player);
    this.player = new Player();
    console.log('players', this.players);
    form.reset();
  }
}
