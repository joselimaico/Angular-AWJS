import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-estreno',
  templateUrl: './pelicula-estreno.component.html',
  styleUrls: ['./pelicula-estreno.component.css']
})
export class PeliculaEstrenoComponent implements OnInit {

  @Input() urlImagen:string;
  @Input() descripcionImagen:string;
  @Input() nombrePelicula:string;
  @Input() descripcionPelicula:string;
  @Input() esEstreno: boolean;
  @Input() textoEstreno:string;
  @Input() claseEstreno:string;
  constructor() { }

  ngOnInit() {
    this.setColorYClase();
  }
  setColorYClase(){
    if(this.esEstreno){
      this.textoEstreno ='Estreno';
      this.claseEstreno = 'sa-color-estado-rosado'
    }
    else{
      this.textoEstreno='Proximamente'
      this.claseEstreno = 'sa-color-estado-amarillo'
    }

  }

}
