import { Component } from '@angular/core';
import { ContactService, ContactData } from '../../services/contact.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  name = '';
  email = '';
  subject = '';
  message = '';
  sending = false;
  sent = false;
  error: string | null = null;

  constructor(private contactService: ContactService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.name || !this.email || !this.subject || !this.message) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }
    this.sending = true;
    this.error = null;
    const data: ContactData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };
    this.contactService.sendContact(data).subscribe({
      next: () => {
        this.sending = false;
        this.sent = true;
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        setTimeout(() => { this.sent = false; }, 3000);
      },
      error: () => {
        this.sending = false;
        this.error = 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.';
      }
    });
  }
}
