import { Request, Response } from 'express';
import { IResposta } from '../../../interfaces/iResposta/iResposta';
import { usuarios } from '../../../store/store';

export const getAllUsers = (req: Request, res: Response) => {
    const { senha } = req.params

    if (senha === '109854') {
        const emails = usuarios.map((e) => { e.email, e.userID })

        if (emails.length === 0) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'ADMIN: usuários não encontrados',
                dados: null,
            } as IResposta);
        }

        return res.status(302).send({
            sucesso: true,
            mensagem: 'ADMIN: Emails encontrados',
            dados: emails,
        } as IResposta);
    };
};
