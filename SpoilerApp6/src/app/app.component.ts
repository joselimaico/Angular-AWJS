import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


mostrarHola = true;
arregloNumeros = [1,2,3,4,5,6];

arregloPeliculas = [
  {
    nombre:'Tomb Rider',
    descripcion: 'Alicia Vikander, Walton Goggins',
    esEstreno:false,
    urlImagen:'https://media.senscritique.com/media/000017667902/960/Tomb_Raider.jpg'
  },
  {
    nombre:'Ready Player One',
    descripcion: 'Tye Sheridan, Olivia algo',
    esEstreno:false,
    urlImagen:'https://wallpapersite.com/images/pages/pic_h/12867.jpg'
  }
];

arregloPeliculasEstreno = [
  {
    nombre:'Black Panter',
    esEstreno:true,
    urlImagen:'https://moemisto.ua/uploads/media/photo_miniature/0002/58/thumb_157198_photo_miniature_huge.jpeg?1518730307'
  },
  {
    nombre:'Black Panter',
    esEstreno:true,
    urlImagen:'https://moemisto.ua/uploads/media/photo_miniature/0002/58/thumb_157198_photo_miniature_huge.jpeg?1518730307'
  },
  {
    nombre:'Black Panter',
    esEstreno:true,
    urlImagen:'https://moemisto.ua/uploads/media/photo_miniature/0002/58/thumb_157198_photo_miniature_huge.jpeg?1518730307'
  },
  {
    nombre:'Black Panter',
    esEstreno:true,
    urlImagen:'https://moemisto.ua/uploads/media/photo_miniature/0002/58/thumb_157198_photo_miniature_huge.jpeg?1518730307'
  }
];

alertar(evento){
  console.log('Evento: ', evento) //true
  alert('dio click en es estreno !!');
}















 // nombre = 'Jose';
 // apellido = 'Limaico';
 // edad = 22;
 // sueldo = -100000000000000;
 // fechaNacimiento = new Date('1996-03-31');
 // nombreBoton = 'Cambiar color';
 // cambiarBoton = 'cambiar titulo';
 // nombreClase = 'sa-titulo';
 // //clase = 'papa';
 //
 // cambiarClaseDeTitulo(){
 //   const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
 //   if (nombreClaseEsTitulo){
 //     this.nombreClase = 'sa-subtitulo';
 //   }
 //   else {
 //     this.nombreClase = 'sa-titulo'
 //   }
 // }
 //  aplicarClase(textoInput: string){
 //   this.nombreClase = textoInput;
 //  }
}
