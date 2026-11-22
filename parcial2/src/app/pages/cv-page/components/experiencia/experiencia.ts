import { Component } from '@angular/core';
import { Experiencia as ExperienciaInterface } from '../../../../interfaces/cv';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
  proyectos: ExperienciaInterface[] = [
    {
      puesto: 'Desarrollador Full-Stack (Proyecto Integrador)',
      empresa: 'UCEVA - Programación en Ambiente Web I',
      periodo: '2026',
      descripcion: 'Desarrollo de aplicación académica con gestión de estudiantes, docentes, aulas y cursos mediante API REST y base de datos relacional.',
      tecnologias: ['Angular', 'TypeScript', 'PostgreSQL', 'Docker'],
      proyectos: ['Sistema de Gestión Académica', 'API REST Universitaria']
    },
    {
      puesto: 'Desarrollador Frontend (MultiApp DOM & MVC)',
      empresa: 'Taller Práctico Web I',
      periodo: '2026',
      descripcion: 'Implementación de aplicaciones interactivas aplicando arquitectura Modelo-Vista-Controlador y manipulación dinámica del DOM.',
      tecnologias: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git'],
      proyectos: ['MultiApp DOM', 'Portafolio CV Web']
    }
  ];
}