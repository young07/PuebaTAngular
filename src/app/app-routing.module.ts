import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './Components/Clientes/create/create.component';
import { EditComponent } from './Components/Clientes/edit/edit.component';
import { MostrarComponent } from './Components/Clientes/mostrar/mostrar.component';

const routes: Routes = [
  {path: '', component:MostrarComponent},
  {path: 'create', component:CreateComponent},
  {path: 'edit/:id', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
