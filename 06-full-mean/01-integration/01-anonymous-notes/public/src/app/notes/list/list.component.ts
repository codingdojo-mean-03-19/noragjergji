import { Component, OnInit } from '@angular/core';
import { Note } from '../../models'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  notes: Note[] = []; 

  constructor() { }

  ngOnInit() {
  }

  onCreate(note: Note){
    console.log('Creating new Note', note)
    this.notes.push(note)
  }

}
