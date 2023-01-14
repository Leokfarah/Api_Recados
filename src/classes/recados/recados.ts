import { v4 as uuid } from "uuid";
import { IRecados } from "../../interfaces/iRecados/iRecados";

export class Recado implements IRecados {
    id: string = uuid();
    deletado: boolean = false;
    arquivado: boolean = false;

    constructor(
        public proprietario: string,
        public titulo: string,
        public descricao: string,
        public data: string,
    ) {
        this.proprietario = proprietario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
    }

}