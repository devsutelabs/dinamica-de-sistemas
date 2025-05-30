import { Component } from '@angular/core';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  model: any;

  onDateSelect(date: any) {
    console.log('Fecha seleccionada:', date);
  }
}
