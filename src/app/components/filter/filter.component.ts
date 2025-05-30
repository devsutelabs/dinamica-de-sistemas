import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [
    NgForOf
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  eventTypes = ['Workshop', 'Lecture', 'MeetUp', 'Conference'];
}
