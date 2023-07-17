import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages.component';


const routes: Routes = [
  { path: '', component: InicioPagesComponent},
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRountingModule { }
