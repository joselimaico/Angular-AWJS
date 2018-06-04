import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app';
  arregloSistemasOperativos = [
    // {
    //   nombreSO: 'Windows',
    //   versionApiSO:'1',
    //   fechaLanzamientoSO:'30/05/2010',
    //   pesoGigasSO:4.25,
    //   Instalado:true,
    //   detalles:[
    //     {
    //       pesoGigas:2.25,
    //       version:1,
    //       nombre:'Word',
    //       urlDescarga:'www.microsoft.com',
    //       fechaLanzamiento:'2016',
    //       costo:150.48,
    //
    //     }
    //   ]
    // },

  ];

}
