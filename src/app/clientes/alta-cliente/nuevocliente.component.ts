import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.css']
})
export class NuevoclienteComponent implements OnInit {

  nombre: string = '';
  cif: string= '';
  direccion: string = '';

  constructor( private clienteS: ClientesService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const VClilente = new Cliente(this.nombre,this.cif, this.direccion);
    this.clienteS.create(VClilente).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }

}
