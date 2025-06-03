import { Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';

export const BOOKS_ROUTES: Routes = [
  /* {
    path: '',
    loadComponent: () =>
      import('./pages/books-list/books-list.ts').then(m => m.BooksList)
  }, */
  {
    path: 'edit',
    loadComponent: () => import('./pages/books-edit/books-edit').then(m => m.BooksEdit),
    canActivate: [adminGuard]
  }
];
