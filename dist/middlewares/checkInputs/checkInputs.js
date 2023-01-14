"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkInputs = void 0;
const checkInputs = (req, res, next) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(402).send({
            sucesso: false,
            mensagem: 'Dados não enviados',
            dados: { email, senha },
        });
    }
    ;
    next();
};
exports.checkInputs = checkInputs;
//# sourceMappingURL=checkInputs.js.map