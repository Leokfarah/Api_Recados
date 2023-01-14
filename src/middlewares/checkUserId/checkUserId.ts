import { Request, Response, NextFunction } from 'express';
import { IResposta } from '../../interfaces/iResposta/iResposta';
import { usuarios } from '../../store/store';

export const checkUserId = (req: Request, res: Response, next: NextFunction) => {
    const { userID } = req.body || req.params || req.query;

    const existeUserId = usuarios.some((e) => e.userID === userID);

    if (existeUserId) {
        return res.status(401).send({
            sucesso: false,
            mensagem: 'credenciais inválidas',
            dados: null,
        } as IResposta);
    }

    next();
};