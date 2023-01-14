"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desarquivarRecados = void 0;
const store_1 = require("../../../store/store");
const allRecadosUsuario_1 = require("../../global/allRecadosUsuario/allRecadosUsuario");
const desarquivarRecados = (req, res) => {
    const { id, deletado, arquivado, titulo, descricao, data, proprietario } = req.body;
    if (!id || !titulo || !descricao || !data || !proprietario) {
        return res.status(204).send({
            sucesso: false,
            mensagem: 'Dados incompletos',
            dados: null,
        });
    }
    ;
    const indiceRecado = store_1.recados.findIndex((e) => e.id === id);
    if (indiceRecado === -1) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recado não existente',
            dados: null,
        });
    }
    ;
    const recadoEditado = {
        proprietario,
        titulo,
        descricao,
        data,
        id,
        deletado,
        arquivado,
    };
    store_1.recados[indiceRecado] = recadoEditado;
    const recadosDesarquivados = (0, allRecadosUsuario_1.getAllRecadosUsuarioFunction)(proprietario).filter((e) => e.arquivado);
    return res
        .status(200).send({
        sucesso: true,
        mensagem: 'Recado alterado com sucesso',
        dados: recadosDesarquivados,
    });
};
exports.desarquivarRecados = desarquivarRecados;
//# sourceMappingURL=desarquivarRecado.js.map