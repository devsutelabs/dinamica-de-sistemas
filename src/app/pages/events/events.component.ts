import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {CalendarComponent} from '../../components/calendar/calendar.component';
import {FilterComponent} from '../../components/filter/filter.component';
import {EventListComponent} from '../../components/event-list/event-list.component';

@Component({
  selector: 'app-events',
  imports: [
    NavbarComponent,
    FooterComponent,
    CalendarComponent,
    FilterComponent,
    EventListComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  constructor(private router: Router) {}

  NavigateTo(route: string) {
    this.router.navigate([route]);
  }
}
