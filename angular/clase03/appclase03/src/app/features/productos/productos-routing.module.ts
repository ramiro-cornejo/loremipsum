import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosPageComponent } from './productos-page/productos-page.component';

const routes: Routes = [
  { path: '', component: ProductosPageComponent},
  { path: 'ofertas', component: ProductosPageComponent},
  { path: 'producto/:id', component: ProductosPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // rutas hijas
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
