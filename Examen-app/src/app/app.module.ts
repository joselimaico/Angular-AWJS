import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HttpClientModule } from '@angular/common/http';
import { SistemaOperativoComponent } from './sistema-operativo/sistema-operativo.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    SistemaOperativoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
