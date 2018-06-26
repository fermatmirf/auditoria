export class Jornada {
    constructor(
        public _id: number,
        public nombre: string,
        public anio: number,
        public sede: string,
        public organizadores: string,
        public expositores: string,
        public tematicas: string,
        public contacto: string
    ){}
}