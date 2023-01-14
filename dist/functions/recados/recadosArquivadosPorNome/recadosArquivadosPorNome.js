"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadosArquivadosPorNome = void 0;
const store_1 = require("../../../store/store");
const recadosArquivadosPorNome = (req, res) => {
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
    const recadosArquivadosFiltrados = recadosUsuario.filter((e) => e.titulo.toLocaleLowerCase() === tituloBusca && e.arquivado && !e.deletado);
    if (recadosArquivadosFiltrados.length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não encontrado',
            dados: null,
        });
    }
    return res.status(302).send({
        sucesso: true,
        mensagem: 'Recados encontrados',
        dados: recadosArquivadosFiltrados,
    });
};
exports.recadosArquivadosPorNome = recadosArquivadosPorNome;
//# sourceMappingURL=recadosArquivadosPorNome.js.map