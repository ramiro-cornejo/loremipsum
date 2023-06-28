import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoPageComponent } from './pages/carrito-page/carrito-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CarritoPageComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    SharedModule
  ]
})
export class CarritoModule { }
