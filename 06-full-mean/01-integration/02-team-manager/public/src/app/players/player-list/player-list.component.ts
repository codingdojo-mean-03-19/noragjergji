import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PLAYERS } from '../../data';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

  onCreate(player: Player){
    console.log('Creating Player', player)
    this.players.push(player);
  }
}
