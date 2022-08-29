import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './Components/estudiantes/estudiantes.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';

const routes: Routes = [
  {path:'Estudiante', component: EstudiantesComponent},
  {path:'Proyecto', component: ProyectosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
