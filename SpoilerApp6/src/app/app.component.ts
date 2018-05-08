import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nombre = 'Jose';
 apellido = 'Limaico';
 edad = 22;
 sueldo = -100000000000000;
 fechaNacimiento = new Date('1996-03-31');
 nombreBoton = 'Cambiar color';
 cambiarBoton = 'cambiar titulo';
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
  aplicarClase(textoInput: string){
   this.nombreClase = textoInput;
  }
}
