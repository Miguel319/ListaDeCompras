import { Routes, RouterModule } from "@angular/router";
import { ComprasListaComponent } from "./compras-lista/compras-lista.component";
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: "", redirectTo: "/articulos", pathMatch: "full" },,
  { path: "articulos", component: ComprasListaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}