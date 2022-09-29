import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { FormClientComponent } from './Components/cliente/form-client/form-client.component';
import { ArtefactoComponent } from './Components/artefacto/artefacto.component';

const routes: Routes = [
  {path:'Dashboard', component:DashboardComponent},
  {path:'Tabla', component:TableComponent},
  {path:'Formulario', component:FormularioComponent},
  {path:'FormularioCliente', component:FormClientComponent},
  {path:'Cliente', component:ClienteComponent},
  {path:'Artefacto', component:ArtefactoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
