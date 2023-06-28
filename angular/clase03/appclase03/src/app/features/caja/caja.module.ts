import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaRoutingModule } from './caja-routing.module';
import { CajaPageComponent } from './pages/caja-page/caja-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CajaPageComponent
  ],
  imports: [
    CommonModule,
    CajaRoutingModule,
    SharedModule
  ]
})
export class CajaModule { }
