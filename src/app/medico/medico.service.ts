import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from 'app/shared/classes/medico';
import { Observable, tap } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

    getAllMedicos(): Observable<any> {
        return this.http.get<Medico[]>(baseUrl)
        .pipe(
          //first(), //ou take(1)
          tap(medicos => console.log(medicos))
        );
      }

      createMedico(Medico: Medico): Observable<Object>{
        return this.http.post(`${baseUrl}`, Medico); //pega um objeto Medico do Form Angular
      }

      getMedicoById(id: string): Observable<Medico>{
        console.log("Id do service:", id)
        return this.http.get<Medico>(`${baseUrl}/id/${id}`);
      }

      updateMedico(id: string, Medico: Medico): Observable<Object>{
        return this.http.put(`${baseUrl}/id/${id}`, Medico);
      }

     deleteMedico(id: string): Observable<Object>{
      console.log(id);
       return  this.http.delete(`http://localhost:8080/api/v1/medicos/id/${id}`);
      }
}
