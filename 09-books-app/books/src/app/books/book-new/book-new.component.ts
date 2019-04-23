import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Book} from '../../models'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book = new Book();  
  @Output()
  createBook =new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    console.log('Submitting Form', this.book);
    this.createBook.emit(this.book);
    // this.books.push(this.book);
    this.book = new Book();
    // console.log('books', this.books)
    form.reset();
  }

}
