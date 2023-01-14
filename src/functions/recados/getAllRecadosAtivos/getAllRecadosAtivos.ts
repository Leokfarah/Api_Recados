import { getAllRecadosAtivosFunction } from '../../global/allRecadosAtivos/allRecadosAtivos';
import { getAllRecadosUsuarioFunction } from '../../global/allRecadosUsuario/allRecadosUsuario';

export const getAllRecadosAtivos = (userID: string) => {
    const RecadosAtivos = getAllRecadosAtivosFunction(getAllRecadosUsuarioFunction(userID))
    return RecadosAtivos
};