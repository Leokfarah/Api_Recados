import { Request, Response } from 'express';
import { Recado } from "../../../classes/recados/recados";
import { IResposta } from "../../../interfaces/iResposta/iResposta";
import { recados, usuarios } from "../../../store/store";
import { getAllRecadosAtivos } from '../getAllRecadosAtivos/getAllRecadosAtivos';

export const addRecado = (req: Request, res: Response) => {
    const { proprietario, titulo, descricao, data } = req.body;

    const valido = usuarios.some((e) => e.userID === proprietario)

    if (!valido) {
        return res.status(400).send({
            sucesso: false,
            mensagem: 'Requisição invalida',
            dados: null,
        } as IResposta);
    };

    const newRecado: Recado = new Recado(proprietario, titulo, descricao, data);

    recados.push(newRecado);

    return res.status(201).send({
        sucesso: true,
        mensagem: 'Recado criado com sucesso',
        dados: getAllRecadosAtivos(proprietario),
    } as IResposta);

};
