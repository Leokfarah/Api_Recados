import { v4 as uuid } from "uuid";

import { IUsuario } from "../../interfaces/iUsuario/iUsuario";

export class Usuario implements IUsuario {
    userID: string = uuid();

    constructor(
        public email: string,
        public senha: string,
    ) {
        this.email = email;
        this.senha = senha;
    }

}