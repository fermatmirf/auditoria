import { Organizador } from "./organizador";
import { Expositor } from "./expositor";
import { Tematica } from "./tematica";

export class Jornada {
    constructor(
        public _id: number,
        public nombre: string,
        public anio: number,
        public sede: string,
        public organizadores: Organizador[],
        public expositores: Expositor[],
        public tematicas: Tematica[],
        public contacto: string
    ){}
}