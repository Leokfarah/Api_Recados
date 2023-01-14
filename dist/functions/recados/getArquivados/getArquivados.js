"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArquivados = void 0;
const store_1 = require("../../../store/store");
const getArquivados = (req, res) => {
    const { userID } = req.params;
    const { arquivado } = req.query;
    const validaArquivado = arquivado === 'true';
    const recadosUsuario = store_1.recados.filter((e) => e.proprietario === userID);
    if (recadosUsuario.length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não existentes',
            dados: null,
        });
    }
    ;
    const recadosArquivados = recadosUsuario.filter((e) => e.arquivado === validaArquivado && !e.deletado);
    if (recadosArquivados.length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não encontrado',
            dados: null,
        });
    }
    ;
    return res.status(302).send({
        sucesso: true,
        mensagem: 'Recados encontrados',
        dados: recadosArquivados,
    });
};
exports.getArquivados = getArquivados;
//# sourceMappingURL=getArquivados.js.map