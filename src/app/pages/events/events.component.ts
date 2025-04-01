import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  constructor(private router: Router) {}

  NavigateTo(route: string) {
    this.router.navigate([route]);
  }
}
