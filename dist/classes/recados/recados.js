"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recado = void 0;
const uuid_1 = require("uuid");
class Recado {
    constructor(proprietario, titulo, descricao, data) {
        this.proprietario = proprietario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.id = (0, uuid_1.v4)();
        this.deletado = false;
        this.arquivado = false;
        this.proprietario = proprietario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
    }
}
exports.Recado = Recado;
//# sourceMappingURL=recados.js.map