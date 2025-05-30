import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-news',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
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
