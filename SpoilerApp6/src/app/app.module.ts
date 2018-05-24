import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { BotonComponent } from './boton/boton.component';
import { GrillaComponent } from './grilla/grilla.component';
import { PeliculaEstrenoComponent } from './peliculas/pelicula-estreno/pelicula-estreno.component';
import { BuscadorPeliculaComponent } from './buscador/buscador-pelicula/buscador-pelicula.component';
import { PeliculasAgregadasComponent } from './peliculas/peliculas-agregadas/peliculas-agregadas.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {ChartModule} from 'primeng/chart';
import {CarouselModule} from 'primeng/carousel';
import { CorouseldemoComponent } from './corouseldemo/corouseldemo.component';
import {GrowlModule} from 'primeng/growl';

'primeng-advanced-growl';

'primeng/growl';
@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    BotonComponent,
    GrillaComponent,
    PeliculaEstrenoComponent,
    BuscadorPeliculaComponent,
    PeliculasAgregadasComponent,
    CorouseldemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ChartModule,
    CarouselModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
