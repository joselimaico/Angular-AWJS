import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sistema-operativo',
  templateUrl: './sistema-operativo.component.html',
  styleUrls: ['./sistema-operativo.component.css']
})
export class SistemaOperativoComponent implements OnInit {



  @Input() arreglo:[any];
  nombre:string;
  version_lanzamiento:number;
  fecha:string;
  peso:number;
  instalado:boolean;

  constructor() { }

  ngOnInit() {
  }

  crear(){

    this.arreglo.push(new SistemaOperativo(this.nombre,this.version_lanzamiento,this.fecha,this.peso,this.instalado))
    console.log(this.arreglo)

  }

  limpiar(){
    this.nombre='';
    this.version_lanzamiento=0;
    this.peso=0;
    this.fecha='';
    this.instalado=false;
  }


}

class SistemaOperativo {
   constructor( public nombreSO:string,
                public versionApiSO:number,
                public fechaLanzamientoSO:string,
                public pesoGigasSO:number,
                public instalado:boolean,


                ){

  }



}
