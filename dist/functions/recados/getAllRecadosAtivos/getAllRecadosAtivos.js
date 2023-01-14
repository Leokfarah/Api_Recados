"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRecadosAtivos = void 0;
const allRecadosAtivos_1 = require("../../global/allRecadosAtivos/allRecadosAtivos");
const allRecadosUsuario_1 = require("../../global/allRecadosUsuario/allRecadosUsuario");
const getAllRecadosAtivos = (userID) => {
    const RecadosAtivos = (0, allRecadosAtivos_1.getAllRecadosAtivosFunction)((0, allRecadosUsuario_1.getAllRecadosUsuarioFunction)(userID));
    return RecadosAtivos;
};
exports.getAllRecadosAtivos = getAllRecadosAtivos;
//# sourceMappingURL=getAllRecadosAtivos.js.map