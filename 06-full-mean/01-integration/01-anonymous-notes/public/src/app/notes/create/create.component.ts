import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Note } from '../../models'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  note = new Note();
  @Output()
  createNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('Submitting', this.note);
    // this.notes.push(this.note);
    this.createNote.emit(this.note);
    this.note = new Note();
    
    // console.log('notes', this.notes);
    form.reset();
  }

}
