"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadosPorNome = void 0;
const store_1 = require("../../../store/store");
const recadosPorNome = (req, res) => {
    const { userID } = req.params;
    const { titulo } = req.query;
    const tituloBusca = String(titulo).toLocaleLowerCase();
    const recadosUsuario = store_1.recados.filter((e) => e.proprietario === userID);
    if (!recadosUsuario) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não existentes',
            dados: null,
        });
    }
    ;
    const recadoFiltrado = recadosUsuario.filter((e) => e.titulo.toLocaleLowerCase() === tituloBusca && !e.arquivado && !e.deletado);
    if (recadoFiltrado.length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não encontrado',
            dados: null,
        });
    }
    return res.status(302).send({
        sucesso: true,
        mensagem: 'Recados encontrados',
        dados: recadoFiltrado,
    });
};
exports.recadosPorNome = recadosPorNome;
//# sourceMappingURL=recadosPorNome.js.map