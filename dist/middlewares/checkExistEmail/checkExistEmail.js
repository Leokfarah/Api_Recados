"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmail = void 0;
const store_1 = require("../../store/store");
const checkEmail = (req, res, next) => {
    const { email } = req.body || req.params || req.query;
    const existeEmail = store_1.usuarios.some((e) => e.email === email);
    if (existeEmail) {
        return res.status(401).send({
            sucesso: false,
            mensagem: 'credenciais inválidas',
            dados: null,
        });
    }
    ;
    next();
};
exports.checkEmail = checkEmail;
//# sourceMappingURL=checkExistEmail.js.map