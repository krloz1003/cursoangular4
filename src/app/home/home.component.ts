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
  
  constructor(
    // Creamos la instancia
  	private _ropaService: RopaService
  ) { }

  ngOnInit() {
  	// Lalamamos al método prueba
    console.log(this._ropaService.prueba('camisa nike'));

  }

}
