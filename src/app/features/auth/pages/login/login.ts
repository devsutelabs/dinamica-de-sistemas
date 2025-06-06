/*
import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule, NgOptimizedImage],
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {this.router.navigate(['/events/edit']);},
      error: () => {this.error = 'Credenciales inválidas';}
    });
  }

  clearError(): void {
    this.error = '';
  }
 */
import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { AdminsService } from '../../services/admins.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit{
  username = '';
  password = '';
  error: string | null = null;

  constructor(private router: Router, private adminsService: AdminsService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/']);
    }
  }

  login() {
    console.log('Intentando login', this.username, this.password);
    // Validación manual para evitar submit vacío
    if (!this.username || !this.password) {
      this.error = 'Usuario y contraseña son obligatorios';
      return;
    }
    this.adminsService.login(this.username, this.password).subscribe({
      next: (res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          this.error = null;
          this.router.navigate(['/']);
        } else {
          this.error = 'Respuesta inválida del servidor';
        }
      },
      error: (err) => {
        this.error = err?.error?.error || 'Credenciales incorrectas';
      }
    });
  }

  clearError() {
    this.error = null;
  }
}
