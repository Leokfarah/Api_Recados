"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const store_1 = require("../../../store/store");
const getAllUsers = (req, res) => {
    const { senha } = req.params;
    if (senha === '109854') {
        const emails = store_1.usuarios.map((e) => e.email);
        if (emails.length === 0) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'ADMIN: usuários não encontrados',
                dados: null,
            });
        }
        return res.status(302).send({
            sucesso: true,
            mensagem: 'ADMIN: Emails encontrados',
            dados: emails,
        });
    }
    ;
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=getAllUsers.js.map