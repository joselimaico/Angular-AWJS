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
    console.log(`${this.nombre}`);
    console.log(`${this.instalado}`)
    this.arreglo.push(new SistemaOperativo(this.nombre,this.instalado))


  }

  limpiar(){
    this.nombre='';
    this.instalado=false;
  }


}

class SistemaOperativo {
   constructor( public nombreSO:string,public Instalado:boolean){

  }

}
