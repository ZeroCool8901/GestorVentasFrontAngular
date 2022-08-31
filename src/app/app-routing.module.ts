import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EstudiantesComponent } from './Components/estudiantes/estudiantes.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { TableComponent } from './Components/table/table.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path:'Estudiante', component: EstudiantesComponent},
  {path:'Proyecto', component: ProyectosComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path:'Tabla', component:TableComponent},
  {path:'Formulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
