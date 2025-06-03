import { Component } from '@angular/core';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css'
})
export class BooksList {
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
