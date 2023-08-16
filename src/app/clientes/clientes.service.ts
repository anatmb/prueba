import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Grupo } from './cliente.model';

@Injectable()
export class ClientesService {
  URL = 'http://localhost:8080/cliente/';

  constructor( private httpClient:HttpClient) {
  }
  
  public traer(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL+ 'traer');
  }
}
