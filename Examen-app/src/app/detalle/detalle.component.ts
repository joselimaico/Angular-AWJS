import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() arregloApp:[any];
  fecha:string;
   peso:number;
   version:number;
   nombre: string;
   url: string;
   costo: number;
  constructor() { }

  ngOnInit() {
  }
  crearDetalle(){
    this.arregloApp.push(new Aplicacion(this.peso,this.version,this.nombre,this.url,this.fecha,this.costo))
  }

}

class Aplicacion {
  constructor( public pesoGigasApp:number,
               public versionApp:number,
               public nombreApp:string,
               public urlDescargaApp:string,
               public fechaLanzamientoApp:string,
               public costoApp:number,



  ){

  }



}
