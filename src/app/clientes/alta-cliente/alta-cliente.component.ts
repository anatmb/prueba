import { Cliente } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {


  cliente: Cliente[] = [];

  constructor(private clientesService: ClientesService) { 
    
  }

  ngOnInit(): void {
     this.clientesService.traer().subscribe(data => {this.cliente = data});
  }

  



}