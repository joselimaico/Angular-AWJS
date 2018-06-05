import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sistema-operativo',
  templateUrl: './sistema-operativo.component.html',
  styleUrls: ['./sistema-operativo.component.css']
})
export class SistemaOperativoComponent implements OnInit {

  @Input() arreglo:[any];
  nombreSO:string;
  versionApiSO:number;
  fechaLanzamientoSO:string;
  pesoGigasSO:number;
  instalado:boolean;
  detalles:[any]


  constructor() {
    this.instalado=false;
  }

  ngOnInit() {
  }
  crear(){

    this.arreglo.push(new SistemaOperativo(this.nombreSO,this.versionApiSO,this.fechaLanzamientoSO,this.pesoGigasSO,this.instalado,this.detalles))
    console.log(this.arreglo)

  }






}

class SistemaOperativo {
  constructor( public nombreSO:string,
               public versionApiSO:number,
               public fechaLanzamientoSO:string,
               public pesoGigasSO:number,
               public instalado:boolean,
               public detalles:[any]


  ){

  }



}
