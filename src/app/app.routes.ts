import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {Contact} from './features/contact/contact';
import {News} from './features/news/news';
import {Books} from './features/books/books';
import {Events} from './features/events/events';
import {EVENTS_ROUTES} from './features/events/events.routes';
import {BOOKS_ROUTES} from './features/books/books.routes';
import {AUTH_ROUTES} from './features/auth/auth.routes';

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
  },
  {
    path: 'auth',
    children: AUTH_ROUTES
  },
  {
    path: 'events-edit',
    children: EVENTS_ROUTES
  },
  {
    path: 'books-edit',
    children: BOOKS_ROUTES
  },
];
