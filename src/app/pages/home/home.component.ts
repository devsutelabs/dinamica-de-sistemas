import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {CommonModule, NgForOf, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    NavbarComponent,
    FooterComponent,
    NgOptimizedImage,
    NgForOf,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  activeTabIndex: number = 0;
  tabs = [
    { title: 'Noticias', icon: 'bi bi-binoculars' },
    { title: 'Eventos y formación', icon: 'bi bi-command' },
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
