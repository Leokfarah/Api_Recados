import { Request, Response, NextFunction } from 'express';
import { IResposta } from '../../interfaces/iResposta/iResposta';
import { usuarios } from '../../store/store';

export const checkEmail = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body || req.params || req.query;
    const existeEmail = usuarios.some((e) => e.email === email);

    if (existeEmail) {
        return res.status(401).send({
            sucesso: false,
            mensagem: 'credenciais inválidas',
            dados: null,
        } as IResposta);
    };

    next();
};
