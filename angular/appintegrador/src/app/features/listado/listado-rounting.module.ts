import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPagesComponent } from './pages/listado-pages/listado-pages.component';


const routes: Routes = [
  { path: '', component: ListadoPagesComponent},
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRountingModule { }
