"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const uuid_1 = require("uuid");
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.userID = (0, uuid_1.v4)();
        this.email = email;
        this.senha = senha;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map