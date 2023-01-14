"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRecadosUsuarioFunction = void 0;
const store_1 = require("../../../store/store");
function getAllRecadosUsuarioFunction(userID) {
    const recadosUsuario = store_1.recados.filter((e) => e.proprietario === userID);
    return recadosUsuario;
}
exports.getAllRecadosUsuarioFunction = getAllRecadosUsuarioFunction;
//# sourceMappingURL=allRecadosUsuario.js.map