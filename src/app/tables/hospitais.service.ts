import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, tap } from 'rxjs';
import { Hospital } from './hospital';

//const baseUrl = 'https://consultaai.onrender.com/api/v1/hospitais';
const baseUrl = 'http://localhost:8080/api/v1/hospitais';

@Injectable({
  providedIn: 'root'
})
export class HospitaisService {  

    constructor(private http: HttpClient) { }

    getAllHospitais(): Observable<any> {
        return this.http.get<Hospital[]>(baseUrl+"/todos")
        .pipe(
          //first(), //ou take(1)
          tap(hospitais => console.log(hospitais))
        );
      }

      createHospital(hospital: Hospital): Observable<Object>{
        return this.http.post(`${baseUrl}`, hospital); //pega um objeto Hospital do Form Angular
      }

      getHospitalById(id: string): Observable<Hospital>{
        console.log("Id do service:", id)
        return this.http.get<Hospital>(`${baseUrl}/id/${id}`);
      }

      updateHospital(id: string, hospital: Hospital): Observable<Object>{
        return this.http.put(`${baseUrl}/id/${id}`, hospital);
      }

     deleteHospital(id: string): Observable<Object>{
      console.log(id);
       return  this.http.delete(`http://localhost:8080/api/v1/hospitais/id/${id}`);
      }

}