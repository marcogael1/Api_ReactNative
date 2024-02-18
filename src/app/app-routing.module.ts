import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';

const routes: Routes = [
  { path: 'actualizar-persona/:id', component: ActualizarPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
