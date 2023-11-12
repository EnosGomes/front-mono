import { Consulta } from "./consulta";

export class Paciente {
    id : string ;
    codigoPaciente: number;
    numeroSus: string; 
    numeroCelular: string; 
    consultas?: Consulta[];    
}