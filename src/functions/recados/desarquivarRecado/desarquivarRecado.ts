import e, { Request, Response } from 'express';
import { IRecados } from '../../../interfaces/iRecados/iRecados';
import { IResposta } from '../../../interfaces/iResposta/iResposta';
import { recados } from '../../../store/store';
import { getAllRecadosUsuarioFunction } from '../../global/allRecadosUsuario/allRecadosUsuario';

export const desarquivarRecados = (req: Request, res: Response) => {
    const { id, deletado, arquivado, titulo, descricao, data, proprietario } = req.body;

    if (!id || !titulo || !descricao || !data || !proprietario) {
        return res.status(204).send({
            sucesso: false,
            mensagem: 'Dados incompletos',
            dados: null,
        } as IResposta);
    };

    const indiceRecado = recados.findIndex((e) => e.id === id);

    if (indiceRecado === -1) {
        return res.status(404).send({
            sucesso: false,
            mensagem: 'Recado não existente',
            dados: null,
        } as IResposta);
    };

    const recadoEditado: IRecados = {
        proprietario,
        titulo,
        descricao,
        data,
        id,
        deletado,
        arquivado,
    };

    recados[indiceRecado] = recadoEditado;

    const recadosDesarquivados = getAllRecadosUsuarioFunction(proprietario).filter((e) => e.arquivado)

    return res
        .status(200).send({
            sucesso: true,
            mensagem: 'Recado alterado com sucesso',
            dados: recadosDesarquivados,
        } as IResposta);
};