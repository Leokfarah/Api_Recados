"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const store_1 = require("../../../store/store");
const getUser = (req, res) => {
    const { email, senha } = req.body;
    const usuarioEncontrado = store_1.usuarios.some((e) => e.email === email && e.senha === senha);
    if (usuarioEncontrado) {
        const IdUsuario = store_1.usuarios.filter((e) => e.email === email).map((e) => {
            e.email === email;
            return e.userID;
        });
        return res.status(202).send({
            sucesso: true,
            mensagem: 'Login Autorizado',
            dados: IdUsuario,
        });
    }
    ;
    return res.status(401).send({
        sucesso: false,
        mensagem: 'Credenciais inválidas',
        dados: null,
    });
};
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map