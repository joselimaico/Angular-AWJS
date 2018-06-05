import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() nombreSO: string;
  @Input() versionApiSO: number;
  @Input() fechaLanzamientoSO: string;
  @Input() pesoGigasSO: number;
  @Input() estadoInstalacionSO: boolean;


  constructor() { }

  ngOnInit() {
  }



}
