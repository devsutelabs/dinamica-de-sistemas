import { Component } from '@angular/core';
import {Layout} from './layout/layout';

@Component({
  selector: 'app-root',
  imports: [
    Layout
  ],
  templateUrl: './app.html',
})
export class App {
  protected title = 'dinamica-de-sistemas-v2';
}
