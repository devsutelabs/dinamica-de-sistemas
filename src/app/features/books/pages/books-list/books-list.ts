import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService, BookCategory } from '../../services/books.service';
import { BookCreateModal } from '../../components/book-create-modal';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, BookCreateModal],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css'
})
export class BooksList implements OnInit {
  categories: BookCategory[] = [];
  loading = true;
  error = '';
  showCreateModal = false;
  modalRef: BookCreateModal | null = null;

  constructor(private booksService: BooksService, public authService: AuthService) {}

  ngOnInit() {
    this.booksService.getBooksByCategory().subscribe({
      next: (categories: BookCategory[]) => {
        this.categories = categories;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Error cargando los libros';
        this.loading = false;
      }
    });
  }

  openCreateModal(modal: BookCreateModal) {
    modal.open(this.categories);
    this.modalRef = modal;
  }

  onBookCreated() {
    this.ngOnInit();
  }
}
