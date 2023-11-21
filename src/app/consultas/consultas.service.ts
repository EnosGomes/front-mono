import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, tap } from 'rxjs';
import { Consulta } from './consulta';

//const baseUrl = 'https://consultaai.onrender.com/api/v1/hospitais';
const baseUrl = 'http://localhost:8080/api/v1/consultas';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {  

    constructor(private http: HttpClient) { }

    getAllConsultas(): Observable<any> {
        return this.http.get<Consulta[]>(baseUrl+"/todos")
        .pipe(
          //first(), //ou take(1)
          tap(consultas => console.log(consultas))
        );
      }

      createConsulta(consulta: Consulta): Observable<Object>{
        return this.http.post(`${baseUrl}`, consulta); //pega um objeto consulta do Form Angular
      }

      getConsultaById(id: string): Observable<Consulta>{
        console.log("Id do service:", id)
        return this.http.get<Consulta>(`${baseUrl}/id/${id}`);
      }

      updateConsulta(id: string, consulta: Consulta): Observable<Object>{
        return this.http.put(`${baseUrl}/id/${id}`, consulta);
      }

     deleteConsulta(id: string): Observable<Object>{
      console.log(id);
       return  this.http.delete(`http://localhost:8080/api/v1/consultas/id/${id}`);
      }

}