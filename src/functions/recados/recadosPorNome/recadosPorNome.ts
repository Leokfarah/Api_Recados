import { Request, Response } from 'express';
import { IResposta } from '../../../interfaces/iResposta/iResposta';
import { recados } from '../../../store/store';

export const recadosPorNome = (req: Request, res: Response) => {
    const { userID } = req.params;
    const { titulo } = req.query;
    const tituloBusca = String(titulo).toLocaleLowerCase()

    const recadosUsuario = recados.filter((e) => e.proprietario === userID)

    if (!recadosUsuario) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não existentes',
            dados: null,
        } as IResposta);
    };

    const recadoFiltrado = recadosUsuario.filter((e) => e.titulo.toLocaleLowerCase() === tituloBusca && !e.arquivado && !e.deletado)

    if (recadoFiltrado.length === 0) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recados não encontrado',
            dados: null,
        } as IResposta);
    }

    return res.status(302).send({
        sucesso: true,
        mensagem: 'Recados encontrados',
        dados: recadoFiltrado,
    } as IResposta);

};
