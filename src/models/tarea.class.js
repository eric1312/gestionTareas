import { ESTADO } from "./estado.enum";

export class Tarea {
    titulo = '';
    descripcion = '';
    estado = ESTADO.PENDIENTE;

    constructor(titulo, descripcion,estado){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado
    }

}