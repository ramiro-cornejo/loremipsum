import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { Producto } from 'src/app/interface/producto.interface';
import { Carrito } from '../interface/carrito.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  numbers$ = interval(1000); 
  carritos?: Carrito[];

  constructor(private http: HttpClient) {}

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

  solicitarProductos(): Observable<Carrito[]> {
    console.log("Ejecutar consulta")
    return this.http.get<Array<Carrito>>('https://api.escuelajs.co/api/v1/products')
    }
}

