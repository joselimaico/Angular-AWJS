import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { BotonComponent } from './boton/boton.component';
import { GrillaComponent } from './grilla/grilla.component';
import { PeliculaEstrenoComponent } from './peliculas/pelicula-estreno/pelicula-estreno.component';
import { BuscadorPeliculaComponent } from './buscador/buscador-pelicula/buscador-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    BotonComponent,
    GrillaComponent,
    PeliculaEstrenoComponent,
    BuscadorPeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
