"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRecadosAtivosFunction = void 0;
function getAllRecadosAtivosFunction(recadosUsuario) {
    const recadosAtivos = recadosUsuario.filter((e) => e.arquivado === false && e.deletado === false);
    return recadosAtivos;
}
exports.getAllRecadosAtivosFunction = getAllRecadosAtivosFunction;
//# sourceMappingURL=allRecadosAtivos.js.map