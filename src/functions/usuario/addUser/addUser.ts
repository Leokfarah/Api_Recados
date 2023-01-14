import { Request, Response } from 'express';
import { Usuario } from '../../../classes/usuario/usuario';
import { IResposta } from '../../../interfaces/iResposta/iResposta';
import { usuarios } from '../../../store/store';

export const addUser = (req: Request, res: Response) => {
    const { email, senha } = req.body;

    const newUser: Usuario = new Usuario(email, senha);

    usuarios.push(newUser);

    return res.status(201).send({
        sucesso: true,
        mensagem: 'Usuário cadastrado com sucesso',
        dados: { 'cadastrado': newUser.userID },
    } as IResposta);

};