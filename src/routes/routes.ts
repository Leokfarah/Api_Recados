import { Router, Request, Response } from 'express';
import { addRecado } from '../functions/recados/addRecado/addRecado';
import { addUser } from '../functions/usuario/addUser/addUser';
import { getAllRecadosAtivos } from '../functions/recados/getAllRecadosAtivos/getAllRecadosAtivos';
import { getUser } from '../functions/usuario/getUser/getUser';
import { checkEmail } from '../middlewares/checkExistEmail/checkExistEmail';
import { checkInputs } from '../middlewares/checkInputs/checkInputs';
import { editRecado } from '../functions/recados/editRecado/editRecado';
import { getArquivados } from '../functions/recados/getArquivados/getArquivados';
import { getAllRecados } from '../functions/recados/getAllRecados/getAllRecados';
import { getAllUsers } from '../functions/usuario/getAllUsers/getAllUsers';
import { recadosPorNome } from '../functions/recados/recadosPorNome/recadosPorNome';
import { recados, usuarios } from '../store/store';
import { checkUserId } from '../middlewares/checkUserId/checkUserId';
import { IResposta } from '../interfaces/iResposta/iResposta';
import { desarquivarRecados } from '../functions/recados/desarquivarRecado/desarquivarRecado';
import { recadosArquivadosPorNome } from '../functions/recados/recadosArquivadosPorNome/recadosArquivadosPorNome';

export const routes = Router();

// usuário
routes.post('/cadastro', [checkInputs, checkEmail], (req: Request, res: Response) => {
    // cadastrar usuário
    addUser(req, res);
})

routes.post('/usuario', [checkInputs], (req: Request, res: Response) => {
    // logar usuário
    getUser(req, res);
})

//recados
routes.post('/novoRecado', (req: Request, res: Response) => {
    addRecado(req, res);
})

routes.get('/recados/ativos/:userID', [checkUserId], (req: Request, res: Response) => {
    const { userID } = req.params;

    getAllRecadosAtivos(userID);

    if (getAllRecadosAtivos(userID).length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Não há recados ativos',
            dados: null,
        } as IResposta);
    }

    return res.status(302).send({
        sucesso: true,
        mensagem: 'Recados encontrados',
        dados: getAllRecadosAtivos(userID),
    } as IResposta);
})

routes.get('/recados/:userID/arquivado', (req: Request, res: Response) => {
    // get com query p/ arquivados
    getArquivados(req, res);
})

routes.get('/recados/:userID/buscar', (req: Request, res: Response) => {
    //buscar recado pelo nome query
    recadosPorNome(req, res);
})

routes.get('/recados/arquivados/:userID/buscar', (req: Request, res: Response) => {
    //buscar recado pelo nome query
    recadosArquivadosPorNome(req, res);
})

routes.put('/editar', (req: Request, res: Response) => {
    // editar recados, alterar variáveis para arquivar e soft delete
    editRecado(req, res);
})

routes.put('/editar/desarquivar', (req: Request, res: Response) => {
    // editar recados, alterar variavel para arquivar
    desarquivarRecados(req, res);
})

// rotas somente para consulta do back-end (não utilizar no front, dados sensíveis)
routes.get('/admin/usuarios/:senha', (req: Request, res: Response) => {
    getAllUsers(req, res);
})

routes.get('/admin/recados/:senha', (req: Request, res: Response) => {
    getAllRecados(req, res);
})

