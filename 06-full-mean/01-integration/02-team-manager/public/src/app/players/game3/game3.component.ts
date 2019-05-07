import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
  players: Player[] = [];


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players =>{
      console.log(players);
      this.players = players;
    })
  }

  onPlays3(event:Event, player:Player){
    event.stopPropagation();
    console.log('Playing', player);
    player.status3 = 'Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }

  onDoesnt3(event:Event, player:Player){
    event.stopPropagation();
    console.log('Not Playing', player);
    player.status3 = 'Not Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }

  onUndecided3(event:Event, player:Player){
    event.stopPropagation();
    console.log('Undecided', player);
    player.status3 = 'Undecided';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {     
    })
  }


}
