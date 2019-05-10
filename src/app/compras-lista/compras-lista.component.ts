import { Component, OnInit, OnDestroy } from "@angular/core";
import { ArticuloService } from "../servicio/articulo.service";
import { Articulo } from "../modelos/articulo.model.";
import { Subscription } from "rxjs";

@Component({
  selector: "app-compras-lista",
  templateUrl: "./compras-lista.component.html",
  styleUrls: ["./compras-lista.component.css"]
})
export class ComprasListaComponent implements OnInit, OnDestroy {
  articulos: Articulo[];
  private suscripcion: Subscription;

  constructor(private articuloService: ArticuloService) {}

  ngOnInit() {
    this.articulos = this.articuloService.getArticulos();
    this.suscripcion = this.articuloService.articulosCambiados.subscribe(
      (articulos: Articulo[]) => {
        this.articulos = articulos;
      }
    );
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  alEditarArticulo(id: number) {
    this.articuloService.inicioEdicion.next(id);
  }
}
