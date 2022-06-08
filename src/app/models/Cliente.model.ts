export class Contacto {
    id: number;
    numero: string;
}

export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    fecha_Nacimiento: string;
    genero: string;
    email: string;
    contactos: Contacto[];
}