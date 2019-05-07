import { Component, OnInit , OnDestroy} from '@angular/core';
import { Player } from '../../models';
import {PlayerService} from '../../services';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  sub: Subscription;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    console.log(this.playerService);
    this.sub = this.playerService.getPlayers()
      .subscribe(players => {
      this.players = players;
      })
  }

  ngOnDestroy(): void {
   this.sub.unsubscribe;    
  }

  onCreate(player: Player){
    console.log('Creating Player', player)
    this.playerService.createPlayer(player)
      .subscribe(createdPlayer => {
        console.log(createdPlayer);

        this.players.push(createdPlayer);
      })
  }

  onDelete(event: Event, player: Player){
    console.log('Deleting Player')
    this.playerService.removePlayer(player._id)
      .subscribe(removedPlayer => {
        console.log('Deleting Player', removedPlayer)
        this.players = this.players.filter(player => player._id != removedPlayer._id)
      })
  }
}
