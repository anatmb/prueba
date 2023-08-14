import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Grupo } from './cliente.model';

@Injectable()
export class ClientesService {
  URL = 'http://localhost:8080/clientes/';

  constructor( private httpClient:HttpClient) {
  }
  
  public getClientes(): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.URL+ 'getClientes');
  }
}
