import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

// almacenará información que será utilizada en toda la aplicación, tal como componentes 
// reutilizables, como un HEADER o FOOTER, directivas o pipes.

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
