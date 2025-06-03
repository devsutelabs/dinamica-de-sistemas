import { Component } from '@angular/core';
import {EventCard} from '../../components/event-card/event-card';

@Component({
  selector: 'app-events-list',
  imports: [
    EventCard
  ],
  templateUrl: './events-list.html',
  styleUrl: './events-list.css'
})
export class EventsList {
  events = [
    { title: 'Marketing Workshop #3', date: new Date(2025, 0, 26), type: 'Workshop', color: 'danger' },
    { title: 'Marketing Lecture #11', date: new Date(2025, 0, 26), type: 'Lecture', color: 'warning' },
    { title: 'Marketing Meetup #4', date: new Date(2025, 0, 26), type: 'MeetUp', color: 'primary' },
    { title: 'Marketing Conference', date: new Date(2025, 0, 26), type: 'Conference', color: 'success' }
  ];
}
