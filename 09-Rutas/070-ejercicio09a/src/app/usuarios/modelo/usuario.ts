export interface Nombre {
    firstname: string,
    lastname: string
  }

export interface Usuario {
    id: number,
    email: string,
    username: string,
    password: string,
    name:Nombre
}

export interface ResumenUsuario {
    id: number,
    name:Nombre
}

