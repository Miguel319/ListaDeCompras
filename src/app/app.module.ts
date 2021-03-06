import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprasListaComponent } from './compras-lista/compras-lista.component';
import { ComprasEditarComponent } from './compras-lista/compras-editar/compras-editar.component';
import { HeaderComponent } from './header/header.component';
import { ArticuloService } from './servicio/articulo.service';

@NgModule({
  declarations: [
    AppComponent,
    ComprasListaComponent,
    ComprasEditarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ArticuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
