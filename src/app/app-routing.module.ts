import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComprasListaComponent } from "./compras-lista/compras-lista.component";

const routes: Routes = [
  { path: "", redirectTo: "articulos", pathMatch: "full" },
  { path: "articulos", component: ComprasListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
