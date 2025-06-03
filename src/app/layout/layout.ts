import { Component } from '@angular/core';
import {Navbar} from '../shared/ui/navbar/navbar';
import {RouterOutlet} from '@angular/router';
import {Footer} from '../shared/ui/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    Navbar,
    RouterOutlet,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
