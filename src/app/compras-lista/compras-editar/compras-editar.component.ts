import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Articulo } from "src/app/modelos/articulo.model.";
import { ArticuloService } from "src/app/servicio/articulo.service";

@Component({
  selector: "app-compras-editar",
  templateUrl: "./compras-editar.component.html",
  styleUrls: ["./compras-editar.component.css"]
})
export class ComprasEditarComponent implements OnInit, OnDestroy {
  @ViewChild("f") comprasListaForm: NgForm;
  suscripcion: Subscription;
  modoEditar = false;
  articuloEditadoIndex: number;
  articuloEditado: Articulo;

  constructor(private articuloService: ArticuloService) {}

  ngOnInit() {
    this.suscripcion = this.articuloService.inicioEdicion.subscribe(
      (indice: number) => {
        this.articuloEditadoIndex = indice;
        this.modoEditar = true;
        this.articuloEditado = this.articuloService.getArticulo(indice);
        this.comprasListaForm.setValue({
          nombre: this.articuloEditado.nombre,
          cantidad: this.articuloEditado.cantidad,
          precio: this.articuloEditado.precio
        });
      }
    );
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
    this.modoEditar = false;
  }

  alLimpiar() {
    this.comprasListaForm.reset();
    this.modoEditar = false;
  }

  alEliminar() {
    this.articuloService.eliminarArticulo(this.articuloEditadoIndex);
    this.alLimpiar();
  }

  alEnviar(form: NgForm) {
    const valor = form.value;
    const nuevoArticulo = new Articulo(
      valor.nombre,
      valor.cantidad,
      valor.precio
    );

    if (this.modoEditar) {
      this.articuloService.actualizarArticulo(
        this.articuloEditadoIndex,
        nuevoArticulo
      );
    } else {
      this.articuloService.agregarArticulo(nuevoArticulo);
    }

    this.modoEditar = false;
    form.reset();
  }
}
