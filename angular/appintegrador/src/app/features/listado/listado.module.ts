import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/shared/shared.module';
import { ListadoPagesComponent } from './pages/listado-pages/listado-pages.component';
import { ListadoRountingModule } from './listado-rounting.module';

import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [
    ListadoPagesComponent
  ],
  imports: [
    CommonModule,
    ListadoRountingModule,
    SharedModule,
    MatButtonModule

  ]
})
export class ListadoModule { }