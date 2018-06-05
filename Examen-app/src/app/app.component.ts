import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sistemaID:number=0;

  arregloSistemasOperativos = [
    {
      nombreSO: 'Windows',
      versionApiSO:10,
      fechaLanzamientoSO:'30/05/2010',
      pesoGigasSO:4.25,
      instalado:true,
      idSO:1,
      detalles:[
        {
          pesoGigasApp:2.25,
          versionApp:1,
          nombreApp:'Word',
          urlDescargaApp:'www.microsoft.com',
          fechaLanzamientoApp:'2016',
          costoApp:150.48,
          SOID:1

        }
      ]
    },
    {
      nombreSO: 'Mac OS X',
      versionApiSO:3,
      fechaLanzamientoSO:'30/02/2010',
      pesoGigasSO:4.25,
      instalado:true,
      idSO:2,
      detalles:[
        {
          pesoGigasApp:2.25,
          versionApp:1,
          nombreApp:'FaceTime',
          urlDescargaApp:'www.apple.com',
          fechaLanzamientoApp:'2016',
          costoApp:29.95,
          SOID:2

        },
        {
          pesoGigasApp:8,
          versionApp:2,
          nombreApp:'iTunes',
          urlDescargaApp:'www.apple.com',
          fechaLanzamientoApp:'2000',
          costoApp:0.0,
          SOID:2

        },

      ]
    }

  ]

  mostrarCard(indice){
    this.sistemaID=indice;
  }








}
