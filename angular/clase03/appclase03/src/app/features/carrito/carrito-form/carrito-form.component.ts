import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito-form',
  templateUrl: './carrito-form.component.html',
  styleUrls: ['./carrito-form.component.scss']
})
export class CarritoFormComponent implements OnInit{
  nombre = '';
  precio: number = 0;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const titulo = this.router.snapshot.params['title'];

    if(titulo) {
      this.nombre = titulo;
    }
    if(this.router.snapshot.params['price']) {
      this.precio = this.router.snapshot.params['price'];
    }
  }

  imprimir() {
    console.log('imprimir', this.nombre);
  }
  eliminar() {
    this.nombre = '';
    console.log('eliminar', this.nombre);
  }
}

