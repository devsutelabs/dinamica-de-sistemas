import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  category_id: number;
}

export interface BookCategory {
  id: number;
  name: string;
  description: string;
  books: Book[];
}

@Injectable({ providedIn: 'root' })
export class BooksService {
  private booksUrl = 'http://localhost:3000/api/books';
  private categoriesUrl = 'http://localhost:3000/api/book-categories';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getCategories(): Observable<BookCategory[]> {
    return this.http.get<BookCategory[]>(this.categoriesUrl);
  }

  createBook(book: Partial<Book>): Observable<any> {
    return this.http.post(this.booksUrl, book);
  }

  getBooksByCategory(): Observable<BookCategory[]> {
    return forkJoin({
      categories: this.getCategories(),
      books: this.getBooks()
    }).pipe(
      map(({ categories, books }) => {
        return categories.map(category => ({
          ...category,
          books: books.filter(book => book.category_id === category.id)
        }));
      })
    );
  }
}
