import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

@Input() peso:number;
@Input() version:number;
@Input() nombre: string;
@Input() url: string;
@Input() costo: number;
  constructor() { }

  ngOnInit() {
  }
  crearDetalle(){
    console.log(`${this.peso}`);
  }

}
