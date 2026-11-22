import { Component } from '@angular/core';
import { Libro } from '../../interfaces/cv';

@Component({
  selector: 'app-libros-page',
  standalone: true,
  imports: [],
  templateUrl: './libros-page.html',
  styleUrl: './libros-page.css'
})
export class LibrosPage {
  libros: Libro[] = [
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      genero: 'Realismo mágico',
      sinopsis: 'La saga de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.',
      portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg',
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      genero: 'Ciencia ficción distópica',
      sinopsis: 'En una sociedad vigilada constantemente por el Gran Hermano, Winston Smith cuestiona el control totalitario.',
      portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
    },
    {
      titulo: 'El problema de los tres cuerpos',
      autor: 'Cixin Liu',
      genero: 'Ciencia ficción dura',
      sinopsis: 'Un proyecto secreto militar en la China de los años sesenta establece contacto con una civilización alienígena al borde del colapso.',
      portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780765382030-L.jpg',
    },
    {
      titulo: 'Clean Code (Código Limpio)',
      autor: 'Robert C. Martin',
      genero: 'Ingeniería de Software',
      sinopsis: 'Manual práctico de buenas prácticas, principios y patrones para escribir código legible, mantenible y profesional.',
      portadaUrl: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    }
  ];
}