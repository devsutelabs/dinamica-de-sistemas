import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {NgModule} from '@angular/core';
import {ContactComponent} from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';
import {BooksComponent} from './pages/books/books.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'books',
    component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
