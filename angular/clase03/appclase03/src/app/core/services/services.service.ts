import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/app/interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private productos: Producto[] = [
    { nombre: 'Producto 1', costo: '$2000' },
    { nombre: 'Producto 2', costo: '$4520' },
    { nombre: 'Producto 3', costo: '$6200' },
    { nombre: 'Producto 4', costo: '$2000' },
    { nombre: 'Producto 5', costo: '$4520' },
    { nombre: 'Producto 6', costo: '$6200' }
  ]

  getProduct(): Observable<Producto[]> {
    return of(this.productos);
  }
}
