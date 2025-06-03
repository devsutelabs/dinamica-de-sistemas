import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

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

  constructor(private router: Router, private renderer: Renderer2) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
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
