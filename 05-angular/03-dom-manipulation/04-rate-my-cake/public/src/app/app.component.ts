import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CAKES } from './data'
import { Cake } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  cake = new Cake();
  cakes: Cake[] = CAKES;
  selectedCake: Cake;

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('submitting', this.cake)
    this.cakes.push(this.cake);
    this.cake = new Cake();
    console.log('Cakes', this.cakes)

    form.reset();
  }

  onSelect(cake: Cake){
    console.log('selecting', cake)
    this.selectedCake = this.selectedCake === cake ? null : cake; 
  }
}
