import { Component } from '@angular/core';
import {EventsList} from './pages/events-list/events-list';
import {Filter} from './components/filter/filter';
import {Calendar} from './components/calendar/calendar';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    EventsList,
    Filter,
    Calendar
  ],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {}
