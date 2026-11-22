import { Component } from '@angular/core';
import { TemaCurso } from '../../interfaces/cv';

@Component({
  selector: 'app-aprendizaje-page',
  standalone: true,
  imports: [],
  templateUrl: './aprendizaje-page.html',
  styleUrl: './aprendizaje-page.css'
})
export class AprendizajePage {
  temas: TemaCurso[] = [
    {
      modulo: 'Módulo 1',
      titulo: 'Estructura Semántica y Estilos Modernos',
      descripcion: 'Maquetación web accesible mediante etiquetas semánticas, modelos de caja, Flexbox, Grid y diseño responsivo.',
      tecnologias: ['HTML5', 'CSS3', 'Bootstrap 5', 'PicoCSS'],
      actividad: 'Talleres prácticos (ejercicios 1-10) y Hoja de Vida Web'
    },
    {
      modulo: 'Módulo 2',
      titulo: 'Control de Versiones y Flujo Colaborativo',
      descripcion: 'Gestión de repositorios locales y remotos, creación de ramas, resolución de conflictos y uso de Conventional Commits.',
      tecnologias: ['Git', 'GitHub'],
      actividad: 'Publicación de portafolio y entregas estructuradas en GitHub'
    },
    {
      modulo: 'Módulo 3',
      titulo: 'JavaScript Moderno, DOM y Arquitectura MVC',
      descripcion: 'Manipulación dinámica del árbol DOM, manejo de eventos, métodos funcionales de arreglos y separación en Modelo-Vista-Controlador.',
      tecnologias: ['JavaScript ES6+', 'DOM API', 'MVC'],
      actividad: 'Aplicación MultiApp interactiva sin acoplamiento por IDs'
    },
    {
      modulo: 'Módulo 4',
      titulo: 'Desarrollo Frontend con Angular y TypeScript',
      descripcion: 'Tipado estático con interfaces, creación y composición de componentes standalone, enrutamiento SPA y flujo de control con @for.',
      tecnologias: ['Angular', 'TypeScript', 'Angular Router'],
      actividad: 'Aplicación web multipágina (Parcial II)'
    }
  ];
}