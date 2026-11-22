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

export interface ExperienciaProyecto {
  cargo: string;
  entidad: string;
  periodo: string;
  descripcion: string;
  tecnologias: string[];
}

export interface TemaCurso {
  modulo: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  actividad: string;
}

export interface ItemTemaLibre {
  titulo: string;
  autor: string;
  genero: string;
  sinopsis: string;
  portadaUrl: string;
}