import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { Producto } from 'src/app/interface/producto.interface';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.scss']
})
export class ProductosPageComponent implements OnInit{
  productos: Producto[] = [];

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.service.getProduct().subscribe(
      productos => {
        this.productos = productos;
      },
      error => {
        console.log('Error al obtener los productos: ', error);
      }
    );
  }
}

/*
{
  next: value => {
        
  },
  error: err => {
        
  },
  complete: () => {
        
  }
}*/