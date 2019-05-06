import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Player } from '../../models'

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player = new Player();

  @Output()
  createPlayer = new EventEmitter<Player>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    console.log('Submitting Form', this.player);
    // this.players.push(this.player);
    this.createPlayer.emit(this.player);
    this.player = new Player();
    // console.log('players', this.players);
    form.reset();
  }

}
