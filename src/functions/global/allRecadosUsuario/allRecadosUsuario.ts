import { IRecados } from '../../../interfaces/iRecados/iRecados';
import { recados } from '../../../store/store';

export function getAllRecadosUsuarioFunction(userID: string): Array<IRecados> {
    const recadosUsuario = recados.filter((e) => e.proprietario === userID);
    return recadosUsuario;
}