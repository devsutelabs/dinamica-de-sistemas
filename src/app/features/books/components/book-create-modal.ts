import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksService, BookCategory } from '../services/books.service';

@Component({
  selector: 'app-book-create-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-create-modal.html',
  styleUrl: './book-create-modal.css'
})
export class BookCreateModal {
  @Output() bookCreated = new EventEmitter<void>();
  show = false;
  categories: BookCategory[] = [];
  error = '';
  loading = false;

  book = {
    title: '',
    author: '',
    image: '',
    description: '',
    category_id: null as number | null
  };

  constructor(private booksService: BooksService) {}

  open(categories: BookCategory[]) {
    this.categories = categories;
    this.show = true;
    this.error = '';
    this.book = { title: '', author: '', image: '', description: '', category_id: null };
  }

  close() {
    this.show = false;
  }

  createBook() {
    // Validación estricta antes de enviar
    if (!this.book.title || this.book.title.length < 2 || this.book.title.length > 100) {
      this.error = 'El título es obligatorio y debe tener entre 2 y 100 caracteres.';
      return;
    }
    if (!this.book.author || this.book.author.length < 2 || this.book.author.length > 100) {
      this.error = 'El autor es obligatorio y debe tener entre 2 y 100 caracteres.';
      return;
    }
    if (this.book.image && !/^https?:\/\/.+/.test(this.book.image)) {
      this.error = 'La imagen debe ser una URL válida (http/https).';
      return;
    }
    if (this.book.description && this.book.description.length > 500) {
      this.error = 'La descripción debe tener máximo 500 caracteres.';
      return;
    }
    if (!this.book.category_id) {
      this.error = 'Seleccione una categoría.';
      return;
    }
    this.error = '';
    this.loading = true;
    const bookToSend = {
      ...this.book,
      category_id: this.book.category_id as number
    };
    this.booksService.createBook(bookToSend).subscribe({
      next: () => {
        this.loading = false;
        this.bookCreated.emit();
        this.close();
      },
      error: (err) => {
        this.error = err?.error?.error || err?.error?.message || 'Error al crear el libro';
        this.loading = false;
      }
    });
  }
}
