import {Component, Input} from '@angular/core';
import {DatePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-event-card',
  imports: [
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css'
})
export class EventCard {
  @Input() event: any;
}
