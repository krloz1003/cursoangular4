import { Component, OnInit } from '@angular/core';
// importando el servicio
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService] // Agregamos el provider
})
export class HomeComponent implements OnInit {
  public titulo = "Pagina principal";
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;
  public fecha;
  public nombre = "Carlos Avila Aguilar";
  
  constructor(
    // Creamos la instancia
  	private _ropaService: RopaService
  ) {
    this.fecha = new Date(2017,4,15);
  }

  ngOnInit() {
  	// Lalamamos al método prueba
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);

  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index:number){
    alert(index);
    this._ropaService.deleteRopa(index);
  }

}
