import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  players: Player[] = [];


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players =>{
      console.log(players);
      this.players = players;
    })
  }

  onPlays1(event:Event, player:Player){
    event.stopPropagation();
    console.log('Playing', player);
    player.status1 = 'Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }

  onDoesnt1(event:Event, player:Player){
    event.stopPropagation();
    console.log('Not Playing', player);
    player.status1 = 'Not Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }

  onUndecided1(event:Event, player:Player){
    event.stopPropagation();
    console.log('Undecided', player);
    player.status1 = 'Undecided';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }


}
