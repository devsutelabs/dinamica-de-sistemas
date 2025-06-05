import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {AuthService} from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @ViewChild('navmenu', { static: false }) navmenu!: ElementRef;

  constructor(private router: Router, private renderer: Renderer2, public authService: AuthService) {}

  navigateTo(route: string): void {
    this.router.navigate([route]).then(() => {
      // Cierra el menú si está abierto
      if (this.navmenu?.nativeElement.classList.contains('show')) {
        this.renderer.removeClass(this.navmenu.nativeElement, 'show');
      }
    });
  }

  toggleMobileMenu(): void {
    if (this.navmenu) {
      if (this.navmenu.nativeElement.classList.contains('show')) {
        this.renderer.removeClass(this.navmenu.nativeElement, 'show');
      } else {
        this.renderer.addClass(this.navmenu.nativeElement, 'show');
      }
    }
  }
}
