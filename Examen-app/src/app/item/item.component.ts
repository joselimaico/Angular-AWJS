import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() NombreSO: string;
  @Input() VersionApi: number;
  @Input() FechaLanzamiento: string;
  @Input() PesoGigas: number;
  @Input() EstadoInstalacion: boolean;

  constructor() { }

  ngOnInit() {
  }

}
