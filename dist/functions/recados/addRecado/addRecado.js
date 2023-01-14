"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecado = void 0;
const recados_1 = require("../../../classes/recados/recados");
const store_1 = require("../../../store/store");
const getAllRecadosAtivos_1 = require("../getAllRecadosAtivos/getAllRecadosAtivos");
const addRecado = (req, res) => {
    const { proprietario, titulo, descricao, data } = req.body;
    const valido = store_1.usuarios.some((e) => e.userID === proprietario);
    if (!valido) {
        return res.status(400).send({
            sucesso: false,
            mensagem: 'Requisição invalida',
            dados: null,
        });
    }
    ;
    const newRecado = new recados_1.Recado(proprietario, titulo, descricao, data);
    store_1.recados.push(newRecado);
    return res.status(201).send({
        sucesso: true,
        mensagem: 'Recado criado com sucesso',
        dados: (0, getAllRecadosAtivos_1.getAllRecadosAtivos)(proprietario),
    });
};
exports.addRecado = addRecado;
//# sourceMappingURL=addRecado.js.map