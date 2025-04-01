import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  constructor(private router: Router) {
  }

  NavigateTo(route: string) {
    this.router.navigate([route]);
  }
}
