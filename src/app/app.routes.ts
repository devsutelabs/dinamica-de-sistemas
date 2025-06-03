import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {Contact} from './features/contact/contact';
import {News} from './features/news/news';
import {Books} from './features/books/books';
import {Events} from './features/events/events';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'news',
    component: News
  },
  {
    path: 'events',
    component: Events
  },
  {
    path: 'books',
    component: Books
  }
];
