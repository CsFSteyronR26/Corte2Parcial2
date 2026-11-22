export interface Perfil {
  nombre: string;
  titulo: string;
  ciudad: string;
  correo: string;
  fotoUrl: string;
}

export interface Formacion {
  titulo: string;
  institucion: string;
  periodo: string;
  estado: string;
}

export interface Experiencia{
  puesto: string;
  empresa: string;
  periodo: string;
  descripcion: string;
  tecnologias: string[];
  proyectos: string[];
}

export interface Habilidad {
  nombre: string;
  categoria: string;
  nivel: string;
}

export interface TemaCurso {
  modulo: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  actividad: string;
}

export interface Libro {
  titulo: string;
  autor: string;
  genero: string;
  sinopsis: string;
  portadaUrl: string;
}