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
    urlImagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
  },
  {
    nombre:'Ready Player One',
    descripcion: 'Tye Sheridan, Olivia algo',
    esEstreno:false,
    urlImagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQprASMSiRnRHYgQl5sHoGr8GiMI9IB2XVIQP_tmD61KFgUY'
  }
];

arregloPeliculasEstreno = [
  {
    nombre:'Black Panter',
    esEstreno:true,
    urlImagen:'https://moemisto.ua/uploads/media/photo_miniature/0002/58/thumb_157198_photo_miniature_huge.jpeg?1518730307'
  },
  {
    nombre:'Maze Runner',
    esEstreno:true,
    urlImagen:'https://1.bp.blogspot.com/-kqkMulUPZ7U/Wm_pJ_oIppI/AAAAAAAABX8/4ieKeITF4Tw5xn8KICi1c4qChjPgyjocACLcBGAs/s1600/bvbyidkMaBls1LTaIWYY6UmYTaL.jpg'
  },
  {
    nombre:'The last Jedi',
    esEstreno:true,
    urlImagen:'http://anders.tjulin.se/wp-content/uploads/2017/12/Star-Wars-The-Last-Jedi.jpg'
  },
  {
    nombre:'Justice League',
    esEstreno:true,
    urlImagen:'https://4.bp.blogspot.com/-K4lXik0ASKQ/Wi17Kjm09KI/AAAAAAAAPUM/oXHLO1vgzNkAgcM64HGJ6xJkyf7gkd9UgCLcBGAs/s320/Liga%2B%25281%2529.jpg'
  }
];
arregloBuscador = [
  'home','peliculas','descargas'
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
