import { Component } from '@angular/core';
import {BooksList} from './pages/books-list/books-list';

@Component({
  selector: 'app-books',
  imports: [
    BooksList
  ],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books {

}
