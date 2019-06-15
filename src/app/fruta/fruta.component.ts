import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  // Tipos de datos
  public nombre:string;
  public edad:number;
  public mayorDeEdad:boolean;
  //public trabajos:Array<string> = ['Carpitero', 'Fontanero']; // Entre las etiquetas lleva el tipo de dato que va manejar el array.
  public trabajos:Array<any> = ['Carpitero', 44, 'Fontanero']; // Soporta caulquier tipo de dato al agregar any, como en ejmeplo string y enteros.
  comodin:any;

  constructor() {
  	this.nombre = "Carlos Avila Aguilar";
  	this.edad = 31;
  	this.mayorDeEdad = true;
  	this.comodin = "SI";
  }

  ngOnInit(){
  	this.cambiarNombre(this.nombre);
  	this.cambiarEdad(20);
  	console.log(this.nombre+''+this.mayorDeEdad);

  	//Variables y alcance
  	var uno = 8;
  	var dos = 15;

  	if(uno === 8){
  		let uno = 3;
  		var dos = 88;
  		console.log("Dentro del if "+uno +" Dos: "+dos);
  	}
  	console.log("Fuera del if "+uno+" Dos: "+dos);
  }

  cambiarNombre(){
  	this.nombre = "Maritza Monserrat";  	
  }

  cambiarEdad(edad){
  	this.edad = edad;
  }

}
