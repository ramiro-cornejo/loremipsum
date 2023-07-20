import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, map } from 'rxjs';
import { Carrito } from 'src/app/core/interface/carrito.interface';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'app-carrito-page',
  templateUrl: './carrito-page.component.html',
  styleUrls: ['./carrito-page.component.scss']
})
export class CarritoPageComponent implements OnInit, OnDestroy {
  carritos: Carrito[] = []

  subscripcion?: Subscription;  // Corta el funcionamiento  del observable

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    /*this.subscripcion = this.service.numbers$.pipe( // pipe
      filter(n => {  // operadores
        return n > 1;
      }),
    ).subscribe({ // Observable 
      next: number => {
        console.log(number)
        this.carritos.push(number);
      },
      complete: () => {
        console.log("Finalizado")
      }
    });*/

    this.service.solicitarProductos().pipe(
      map(c => {
        return c.map(c => {
          return {
            ...c,
            price: c.price * 0.5
          } as Carrito
        })
      })
    ).subscribe({
      next: res => {
        this.carritos = res;
      }
    })
  }

  ngOnDestroy(): void {
    if(this.subscripcion) {
      this.subscripcion.unsubscribe();
    }
  }
}
