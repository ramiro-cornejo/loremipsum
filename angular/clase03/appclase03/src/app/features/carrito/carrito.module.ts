import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoPageComponent } from './pages/carrito-page/carrito-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarritoFormComponent } from './carrito-form/carrito-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarritoPageComponent,
    CarritoFormComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CarritoModule { }
