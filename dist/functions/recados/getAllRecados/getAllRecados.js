"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRecados = void 0;
const store_1 = require("../../../store/store");
const getAllRecados = (req, res) => {
    const { senha } = req.params;
    if (senha === '109854') {
        const allRecados = store_1.recados;
        if (allRecados.length === 0) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'ADMIN: Recados não encontrados',
                dados: null,
            });
        }
        return res.status(302).send({
            sucesso: true,
            mensagem: 'ADMIN: Recados encontrados',
            dados: allRecados,
        });
    }
    ;
    return res.status(302).send({
        sucesso: false,
        mensagem: 'você não está autorizado a acessar esta rota',
        dados: 'SEU SAFADÃO'
    });
};
exports.getAllRecados = getAllRecados;
//# sourceMappingURL=getAllRecados.js.map