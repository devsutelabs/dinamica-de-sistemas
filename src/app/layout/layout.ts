import { Component } from '@angular/core';
import {Navbar} from '../shared/ui/navbar/navbar';
import {Router, RouterOutlet} from '@angular/router';
import {Footer} from '../shared/ui/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    Navbar,
    RouterOutlet,
    Footer
  ],
  templateUrl: './layout.html'
})
export class Layout {
  constructor(public router: Router) {}

  hideLayout(): boolean {
    return ['/login'].includes(this.router.url);
  }
}
