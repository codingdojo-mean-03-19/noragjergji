import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players =>{
      console.log(players);
      this.players = players;
    })
  }

  onPlays2(event:Event, player:Player){
    event.stopPropagation();
    console.log('Playing', player);
    player.status2 = 'Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }

  onDoesnt2(event:Event, player:Player){
    event.stopPropagation();
    console.log('Not Playing', player);
    player.status2 = 'Not Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }

  onUndecided2(event:Event, player:Player){
    event.stopPropagation();
    console.log('Undecided', player);
    player.status2 = 'Undecided';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }

}
