import { Component, OnInit } from '@angular/core';
import {Book} from '../../models'
import {BOOKS} from '../../data'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book;
  constructor() { }

  ngOnInit() {
  }

  onSelect(book: Book){
    console.log('Selecting book', book)
    this.selectedBook = this.selectedBook === book ? null : book;

  }

  onCreate(book: Book){
    console.log('Creating book.', book);
    this.books.push(book);
  }

}
