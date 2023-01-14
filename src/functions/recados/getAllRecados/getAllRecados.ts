import { Request, Response } from 'express';
import { IResposta } from '../../../interfaces/iResposta/iResposta';
import { recados } from '../../../store/store';


export const getAllRecados = (req: Request, res: Response) => {
    const { senha } = req.params

    if (senha === '109854') {
        const allRecados = recados

        if (allRecados.length === 0) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'ADMIN: Recados não encontrados',
                dados: null,
            } as IResposta);
        }

        return res.status(302).send({
            sucesso: true,
            mensagem: 'ADMIN: Recados encontrados',
            dados: allRecados,
        } as IResposta);
    };

    return res.status(302).send({
        sucesso: false,
        mensagem: 'você não está autorizado a acessar esta rota',
        dados: 'SEU SAFADÃO'
    } as IResposta);
};
