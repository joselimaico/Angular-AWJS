import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nombre = 'Jose';
 apellido = 'Limaico';
 edad = 28;
 sueldo = -100000000000000;
 fechaNacimiento = new Date('1996-03-30');
 nombreBoton = 'Cambiar color';
 nombreClase = 'sa-titulo';

 cambiarClaseDeTitulo(){
   const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
   if (nombreClaseEsTitulo){
     this.nombreClase = 'sa-subtitulo';
   }
   else {
     this.nombreClase = 'sa-titulo'
   }
 }
}
