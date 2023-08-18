import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { NuevoclienteComponent } from './clientes/alta-cliente/nuevocliente.component';


const routes: Routes = [
  {path:'', component:AltaClienteComponent},
  {path:'nuevocliente', component:NuevoclienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
