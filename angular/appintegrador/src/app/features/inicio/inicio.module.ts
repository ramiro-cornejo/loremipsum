import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRountingModule } from './inicio-rounting.module';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InicioPagesComponent
  ],
  imports: [
    CommonModule,
    InicioRountingModule,
    SharedModule
  ]
})
export class InicioModule { }