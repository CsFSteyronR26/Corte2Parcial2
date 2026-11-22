import { Component } from '@angular/core';
import { Perfil } from './components/perfil/perfil';
import { Formacion } from './components/formacion/formacion';
import { Experiencia } from './components/experiencia/experiencia';
import { Habilidades } from './components/habilidades/habilidades';

@Component({
  selector: 'app-cv-page',
  standalone: true,
  imports: [Perfil, Formacion, Experiencia, Habilidades],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css'
})
export class CvPage {}