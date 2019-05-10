import { Subject } from "rxjs";
import { Articulo } from "../modelos/articulo.model.";

export class ArticuloService {
  articulosCambiados = new Subject<Articulo[]>();
  inicioEdicion = new Subject<number>();

  private articulos: Articulo[] = [
    new Articulo("Pan", 3, 24.6),
    new Articulo("Mantequilla", 2, 9.99),
    new Articulo("Queso", 7, 14.99)
  ];

  getArticulo(indice: number): Articulo {
    return this.articulos[indice];
  }

  getArticulos(): Articulo[] {
    return this.articulos.slice();
  }

  agregarArticulo(articulo: Articulo) {
    this.articulos.push(articulo);
    this.articulosCambiados.next(this.articulos.slice());
  }

  agregarArticulos(articulos: Articulo[]) {
    this.articulos.push(...articulos);
    this.articulosCambiados.next(this.articulos.slice());
  }

  actualizarArticulo(indice: number, nuevoArticulo: Articulo) {
    this.articulos[indice] = nuevoArticulo;
    this.articulosCambiados.next(this.articulos.slice());
  }

  eliminarArticulo(indice: number) {
    this.articulos.splice(indice, 1);
    this.articulosCambiados.next(this.articulos.slice());
  }
}
