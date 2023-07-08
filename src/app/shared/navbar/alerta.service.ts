import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alerta } from '../classes/alerta';

const baseUrl = 'http://localhost:8080/api/v1/alertas';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

    constructor(private http: HttpClient) { }

    retornaTodosAtivos(): Observable<any> {
        return this.http.get(`${baseUrl}/todos`);
    }

    criaNovoAlerta(alerta: Alerta): Observable<Object>{
        return this.http.post(`${baseUrl}`, alerta); //pega um objeto Hospital do Form Angular
    }
}