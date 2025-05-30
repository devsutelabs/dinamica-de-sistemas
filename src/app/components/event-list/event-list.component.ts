import { Component } from '@angular/core';
import {EventCardComponent} from '../event-card/event-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-event-list',
  imports: [
    EventCardComponent,
    NgForOf
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})

export class EventListComponent {
  events = [
    { title: 'Marketing Workshop #3', date: new Date(2025, 0, 26), type: 'Workshop', color: 'danger' },
    { title: 'Marketing Lecture #11', date: new Date(2025, 0, 26), type: 'Lecture', color: 'warning' },
    { title: 'Marketing Meetup #4', date: new Date(2025, 0, 26), type: 'MeetUp', color: 'primary' },
    { title: 'Marketing Conference', date: new Date(2025, 0, 26), type: 'Conference', color: 'success' }
  ];
}
