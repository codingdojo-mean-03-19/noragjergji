import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Player } from '../../models'
import { PlayerService } from '../../services';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})

export class PlayerCreateComponent implements OnInit {
  player = new Player();

  @Output()
  createPlayer = new EventEmitter<Player>();

  constructor(private readonly playerService: PlayerService, private readonly router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    console.log('Submitting Form', this.player);
    this.playerService.createPlayer(this.player)
      .subscribe(player => {
        console.log('New Player', player);

        this.router.navigateByUrl('/')
      })
    // form.reset();
  }

}
