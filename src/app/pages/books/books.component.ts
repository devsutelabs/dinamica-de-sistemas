import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  categories = [
    {
      name: 'Dinamica de sistemas',
      books: [
        {
          title: 'Cien años de soledad',
          author: 'Gabriel García Márquez',
          image: 'assets/books.png',
          description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía.'
        },
        {
          title: '1984',
          author: 'George Orwell',
          image: 'assets/books.png',
          description: 'Una distopía sobre un futuro totalitario donde el Gran Hermano lo vigila todo.'
        },
        {
          title: 'Cien años de soledad',
          author: 'Gabriel García Márquez',
          image: 'assets/books.png',
          description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía.'
        },
        {
          title: 'Cien años de soledad',
          author: 'Gabriel García Márquez',
          image: 'assets/books.png',
          description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía.'
        },
      ]
    },
    {
      name: 'Gestión del equipo',
      books: [
        {
          title: 'El Principito',
          author: 'Antoine de Saint-Exupéry',
          image: 'assets/books.png',
          description: 'Un cuento poético sobre la vida, la amistad y la esencia de lo verdaderamente importante.'
        },
        {
          title: 'El Principito',
          author: 'Antoine de Saint-Exupéry',
          image: 'assets/books.png',
          description: 'Un cuento poético sobre la vida, la amistad y la esencia de lo verdaderamente importante.'
        },
        {
          title: 'El Principito',
          author: 'Antoine de Saint-Exupéry',
          image: 'assets/books.png',
          description: 'Un cuento poético sobre la vida, la amistad y la esencia de lo verdaderamente importante.'
        },
        {
          title: 'Cien años de soledad',
          author: 'Gabriel García Márquez',
          image: 'assets/books.png',
          description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía.'
        },
      ]
    }
  ];
}
