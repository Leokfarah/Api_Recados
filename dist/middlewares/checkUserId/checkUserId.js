"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserId = void 0;
const store_1 = require("../../store/store");
const checkUserId = (req, res, next) => {
    const { userID } = req.body || req.params || req.query;
    const existeUserId = store_1.usuarios.some((e) => e.userID === userID);
    if (existeUserId) {
        return res.status(401).send({
            sucesso: false,
            mensagem: 'credenciais inválidas',
            dados: null,
        });
    }
    next();
};
exports.checkUserId = checkUserId;
//# sourceMappingURL=checkUserId.js.map