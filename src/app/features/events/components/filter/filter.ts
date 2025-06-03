import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [
    FormsModule
  ],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  eventTypes = ['Workshop', 'Lecture', 'MeetUp', 'Conference'];
  selectedTypes: { [key: string]: boolean } = {};
}
