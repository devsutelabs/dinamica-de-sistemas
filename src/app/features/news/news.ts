
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NewsService, NewsItem } from './news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './news.html',
  styleUrls: ['./news.css']
})

export class News implements OnInit {
  news: NewsItem[] = [];
  loading = true;
  error: string | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe({
      next: (data) => {
        this.news = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar las noticias.';
        this.loading = false;
      }
    });
  }
}
