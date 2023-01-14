import { Request, Response } from 'express';
import { IResposta } from '../../../interfaces/iResposta/iResposta';
import { recados } from '../../../store/store';

export const getArquivados = (req: Request, res: Response) => {
    const { userID } = req.params;
    const { arquivado } = req.query;
    const validaArquivado = arquivado === 'true';

    const recadosUsuario = recados.filter((e) => e.proprietario === userID)

    if (recadosUsuario.length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não existentes',
            dados: null,
        } as IResposta);
    };

    const recadosArquivados = recadosUsuario.filter((e) => e.arquivado === validaArquivado && !e.deletado);

    if (recadosArquivados.length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não encontrado',
            dados: null,
        } as IResposta);
    };

    return res.status(302).send({
        sucesso: true,
        mensagem: 'Recados encontrados',
        dados: recadosArquivados,
    } as IResposta);

};


