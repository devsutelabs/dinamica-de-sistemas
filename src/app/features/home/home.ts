import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
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
