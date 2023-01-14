"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const addRecado_1 = require("../functions/recados/addRecado/addRecado");
const addUser_1 = require("../functions/usuario/addUser/addUser");
const getAllRecadosAtivos_1 = require("../functions/recados/getAllRecadosAtivos/getAllRecadosAtivos");
const getUser_1 = require("../functions/usuario/getUser/getUser");
const checkExistEmail_1 = require("../middlewares/checkExistEmail/checkExistEmail");
const checkInputs_1 = require("../middlewares/checkInputs/checkInputs");
const editRecado_1 = require("../functions/recados/editRecado/editRecado");
const getArquivados_1 = require("../functions/recados/getArquivados/getArquivados");
const getAllRecados_1 = require("../functions/recados/getAllRecados/getAllRecados");
const getAllUsers_1 = require("../functions/usuario/getAllUsers/getAllUsers");
const recadosPorNome_1 = require("../functions/recados/recadosPorNome/recadosPorNome");
const store_1 = require("../store/store");
const checkUserId_1 = require("../middlewares/checkUserId/checkUserId");
const desarquivarRecado_1 = require("../functions/recados/desarquivarRecado/desarquivarRecado");
const recadosArquivadosPorNome_1 = require("../functions/recados/recadosArquivadosPorNome/recadosArquivadosPorNome");
exports.routes = (0, express_1.Router)();
// usuário
exports.routes.post('/cadastro', [checkInputs_1.checkInputs, checkExistEmail_1.checkEmail], (req, res) => {
    // cadastrar usuário
    (0, addUser_1.addUser)(req, res);
});
exports.routes.post('/usuario', [checkInputs_1.checkInputs], (req, res) => {
    // logar usuário
    (0, getUser_1.getUser)(req, res);
    console.log(store_1.usuarios);
});
//recados
exports.routes.post('/novoRecado', (req, res) => {
    (0, addRecado_1.addRecado)(req, res);
    console.log(store_1.recados);
});
exports.routes.get('/recados/ativos/:userID', [checkUserId_1.checkUserId], (req, res) => {
    const { userID } = req.params;
    (0, getAllRecadosAtivos_1.getAllRecadosAtivos)(userID);
    if ((0, getAllRecadosAtivos_1.getAllRecadosAtivos)(userID).length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Não há recados ativos',
            dados: null,
        });
    }
    return res.status(302).send({
        sucesso: true,
        mensagem: 'Recados encontrados',
        dados: (0, getAllRecadosAtivos_1.getAllRecadosAtivos)(userID),
    });
});
exports.routes.get('/recados/:userID/arquivado', (req, res) => {
    // get com query p/ arquivados
    (0, getArquivados_1.getArquivados)(req, res);
});
exports.routes.get('/recados/:userID/buscar', (req, res) => {
    //buscar recado pelo nome query
    (0, recadosPorNome_1.recadosPorNome)(req, res);
});
exports.routes.get('/recados/arquivados/:userID/buscar', (req, res) => {
    //buscar recado pelo nome query
    (0, recadosArquivadosPorNome_1.recadosArquivadosPorNome)(req, res);
});
exports.routes.put('/editar', (req, res) => {
    // editar recados, alterar variáveis para arquivar e soft delete
    (0, editRecado_1.editRecado)(req, res);
});
exports.routes.put('/editar/desarquivar', (req, res) => {
    // editar recados, alterar variavel para arquivar
    (0, desarquivarRecado_1.desarquivarRecados)(req, res);
});
// rotas somente para consulta do back-end (não utilizar no front, dados sensíveis)
exports.routes.get('/admin/usuarios/:senha', (req, res) => {
    (0, getAllUsers_1.getAllUsers)(req, res);
});
exports.routes.get('/admin/recados/:senha', (req, res) => {
    (0, getAllRecados_1.getAllRecados)(req, res);
});
//# sourceMappingURL=routes.js.map