import { Component } from '@angular/core';
import {Book} from './models'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  book = new Book();
  books: Book[] = [];

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('Submitting Form', this.book);
    this.books.push(this.book);
    this.book = new Book()
    console.log('books', this.books)
    form.reset();
  }
}
