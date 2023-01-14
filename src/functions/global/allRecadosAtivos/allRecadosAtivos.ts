import { IRecados } from '../../../interfaces/iRecados/iRecados';

export function getAllRecadosAtivosFunction(recadosUsuario: Array<IRecados>) {
    const recadosAtivos = recadosUsuario.filter((e) => e.arquivado === false && e.deletado === false);
    return recadosAtivos;
}