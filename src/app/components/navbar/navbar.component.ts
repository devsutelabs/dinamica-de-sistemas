import {Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navmenu', { static: false }) navmenu!: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.closeMobileMenu();
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

  closeMobileMenu(): void {
    if (this.navmenu) {
      this.renderer.removeClass(this.navmenu.nativeElement, 'show');
      // Cerrar todos los dropdown abiertos al cerrar el menú
      const dropdowns = this.navmenu.nativeElement.querySelectorAll('.dropdown.open');
      dropdowns.forEach((el: HTMLElement) => el.classList.remove('open'));
    }
  }

  toggleDropdown(event: Event, dropdownRef: HTMLElement): void {
    event.preventDefault();
    dropdownRef.classList.toggle('open');
  }

  // Cerrar dropdowns y menú móvil si se cambia a pantalla grande
  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth >= 1200) {
      this.closeMobileMenu(); // También cierra dropdowns
    }
  }
}
