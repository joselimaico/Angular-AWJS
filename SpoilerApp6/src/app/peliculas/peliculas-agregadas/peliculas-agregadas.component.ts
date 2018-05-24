import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-peliculas-agregadas',
  templateUrl: './peliculas-agregadas.component.html',
  styleUrls: ['./peliculas-agregadas.component.css']
})
export class PeliculasAgregadasComponent implements OnInit {
  @Input() urlImagen: string;
  @Input() descripcionImagen: string;
  @Input() nombrePelicula: string;
  @Input() descripcionPelicula: string;


  constructor() { }

  ngOnInit() {
  }

}
