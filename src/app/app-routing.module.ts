import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { FormClientComponent } from './Components/forms/form-client/form-client.component';
import { ArtefactoComponent } from './Components/artefacto/artefacto.component';
import { ContratistaComponent } from './Components/contratista/contratista.component';
import { CuentaBancariaComponent } from './Components/cuenta-bancaria/cuenta-bancaria.component';
import { ServicioComponent } from './Components/servicio/servicio.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { VentaComponent } from './Components/venta/venta.component';

const routes: Routes = [
  {path:'Dashboard', component:DashboardComponent},
  {path:'Tabla', component:TableComponent},
  {path:'FormularioCliente', component:FormClientComponent},
  {path:'Cliente', component:ClienteComponent},
  {path:'Artefacto', component:ArtefactoComponent},
  {path:'Contratista', component:ContratistaComponent},
  {path:'Cuenta Bancaria', component:CuentaBancariaComponent},
  {path:'Servicio', component:ServicioComponent},
  {path:'Usuario', component:UsuarioComponent},
  {path:'Venta', component:VentaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
