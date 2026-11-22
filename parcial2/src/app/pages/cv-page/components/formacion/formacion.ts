import { Component } from '@angular/core';
import { Formacion as FormacionInterface } from '../../../../interfaces/cv';

@Component({
  imports: [],
  selector: 'app-formacion',
  styleUrl: './formacion.css',
  templateUrl: './formacion.html',
  standalone: true
})
export class Formacion {
  estudios: FormacionInterface[] = [
    {
      titulo: 'Ingeniería de Sistemas',
      institucion: 'Unidad Central del Valle del Cauca (UCEVA)',
      periodo: 'En curso',
      estado: 'Pregrado'
    }
  ];
}
