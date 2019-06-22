import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public titulo = 'Componente empleados';  
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
  	this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true);
  	this.trabajadores = [
  		new Empleado('Alfredo Balderas', 45, 'Cocinero', true),
  		new Empleado('Aime Medina', 20, 'Cocinero', true),
  		new Empleado('Karla Lorena', 15, 'Cocinero', true),
  	];
  	this.trabajador_externo = false;
    this.color = 'blue';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit() {
  	console.log(this.empleado);
  	console.log(this.trabajadores);
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }

}
