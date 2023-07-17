import { Component } from '@angular/core';
import { Producto } from 'src/app/interface/producto.interface';

@Component({
  selector: 'app-listado-pages',
  templateUrl: './listado-pages.component.html',
  styleUrls: ['./listado-pages.component.scss']
})
export class ListadoPagesComponent {
  productos: Producto[] = [
    { nombre: 'Mate Camionero', costo: '$9500'},
    { nombre: 'Mate Torpedo', costo: '$8900'},
    { nombre: 'Mate Imperial', costo: '$29000'},
    { nombre: 'Bombilla Pico de loro', costo: '$2900'},
    { nombre: 'Bombilla Pico de rey', costo: '$2900'},
    { nombre: 'Yerba Baldo 1kg', costo: '$3200'},
    { nombre: 'Grabado laser', costo: '$1900'},
    { nombre: 'Termo 1L', costo: '$8900'}
  ];

  mostrarLista: boolean = true;

  accionLista(): void { 
    this.mostrarLista = !this.mostrarLista;
  }
}
