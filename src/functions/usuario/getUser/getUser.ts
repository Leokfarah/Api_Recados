import e, { Request, Response } from 'express';
import { IResposta } from '../../../interfaces/iResposta/iResposta';
import { usuarios } from '../../../store/store';

export const getUser = (req: Request, res: Response) => {
    const { email, senha } = req.body;

    const usuarioEncontrado = usuarios.some((e) => e.email === email && e.senha === senha)

    if (usuarioEncontrado) {
        const IdUsuario = usuarios.filter((e) => e.email === email).map((e) => {
            e.email === email
            return e.userID
        });

        return res.status(202).send({
            sucesso: true,
            mensagem: 'Login Autorizado',
            dados: IdUsuario,
        } as IResposta);
    };

    return res.status(401).send({
        sucesso: false,
        mensagem: 'Credenciais inválidas',
        dados: null,
    } as IResposta);

};
