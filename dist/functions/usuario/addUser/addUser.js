"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const usuario_1 = require("../../../classes/usuario/usuario");
const store_1 = require("../../../store/store");
const addUser = (req, res) => {
    const { email, senha } = req.body;
    const newUser = new usuario_1.Usuario(email, senha);
    store_1.usuarios.push(newUser);
    return res.status(201).send({
        sucesso: true,
        mensagem: 'Usuário cadastrado com sucesso!',
        dados: { 'cadastrado': newUser.userID },
    });
};
exports.addUser = addUser;
//# sourceMappingURL=addUser.js.map