import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./features/productos/productos.module')
    .then(m => m.ProductosModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./features/carrito/carrito.module')
    .then(m => m.CarritoModule)
  },
  {
    path: 'caja',
    loadChildren: () => import('./features/caja/caja.module')
    .then(m => m.CajaModule)
  },
  {
    path: '**',
    redirectTo: 'productos'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
