import { Component } from '@angular/core';
import {Navbar} from '../shared/ui/navbar/navbar';
import {Footer} from '../shared/ui/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    Navbar,
    RouterOutlet,
    Footer
  ],
})
export class Layout {

}
