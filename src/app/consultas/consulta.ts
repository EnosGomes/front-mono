import { Medico } from "app/shared/classes/medico";
import { Paciente } from "app/shared/classes/paciente";

export class Consulta {
    id: string = '';
    nome: string ='';
    codigo: string ='';
    ativo: boolean = false;
    medico: Medico;
    paciente: Paciente;
}
