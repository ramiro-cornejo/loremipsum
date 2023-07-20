import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoPageComponent } from './pages/carrito-page/carrito-page.component';
import { CarritoFormComponent } from './carrito-form/carrito-form.component';

const routes: Routes = [
  { path: '', component: CarritoPageComponent},
  { path: 'nuevo', component: CarritoFormComponent},
  { path: 'carrito/:title/:price', component: CarritoFormComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
