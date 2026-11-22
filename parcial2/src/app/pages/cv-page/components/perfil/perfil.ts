import { Component } from '@angular/core';
import {Perfil as PerfilInterface} from '../../../../interfaces/cv';  

@Component({
  imports: [],
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
  standalone: true
})
export class Perfil {
  datosPerfil: PerfilInterface = {
    nombre: 'Nicolas Restrepo',
    titulo: 'Estudiante de INGENIERIA DE SISTEMAS',
    ciudad: 'Tulua, Colombia',
    correo: 'nicolas.restrepo@example.com',
    fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4nZHogFVzMTsLwRCaOjhhha7q5VaTplj0hqHFODUsg&s=10'
  };
}
