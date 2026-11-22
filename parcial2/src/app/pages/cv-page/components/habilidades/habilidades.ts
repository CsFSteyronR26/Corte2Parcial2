import { Component } from '@angular/core';
import { Habilidad, Habilidad as HabilidadInterface } from '../../../../interfaces/cv';
@Component({
  imports: [],
  selector: 'app-habilidades',
  styleUrl: './habilidades.css',
  templateUrl: './habilidades.html',
  standalone: true
})
export class Habilidades {
  habilidadesTecnicas: Habilidad[] = [
    { nombre: 'HTML5 & CSS3', categoria: 'Frontend', nivel: 'Avanzado' },
    { nombre: 'Bootstrap 5', categoria: 'Frontend', nivel: 'Intermedio' },
    { nombre: 'JavaScript (ES6+)', categoria: 'Frontend', nivel: 'Intermedio' },
    { nombre: 'TypeScript', categoria: 'Lenguaje', nivel: 'Intermedio' },
    { nombre: 'Angular', categoria: 'Framework', nivel: 'Intermedio' },
    { nombre: 'PostgreSQL', categoria: 'Base de Datos', nivel: 'Intermedio' },
    { nombre: 'Docker', categoria: 'DevOps', nivel: 'Básico' },
    { nombre: 'Git & GitHub', categoria: 'Control de Versiones', nivel: 'Intermedio' }
  ];
}