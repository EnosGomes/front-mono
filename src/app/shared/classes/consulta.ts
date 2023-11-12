import { Medico } from "./medico";
import { Paciente } from "./paciente";

export class Consulta {
    id : string ;
    nome: string;
    medico: Medico; 
    paciente: Paciente;
    medicoAceitouConsulta : boolean;
    dataConsulta?: Date;
    horaInicio? : Date;
    horaFim?: Date;
    observacoes?: string;
    isCancelada?: boolean;
    isAgendada?: boolean;
    novaDataConsulta?: Date;    
}