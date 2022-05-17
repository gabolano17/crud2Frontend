import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  {path: '', redirectTo: 'vista', pathMatch: 'full'},
  {path: 'vista', component: VistaComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'editar/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
