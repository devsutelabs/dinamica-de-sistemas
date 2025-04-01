import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  constructor(private router: Router) {}

  NavigateTo(route: string) {
    this.router.navigate([route]);
  }
}
