import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
