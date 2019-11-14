//Importo el componente
import  { Component } from '@angular/core';

//Defino atributos y propiedades del componente
@Component({
	selector: 'videojuegos',
	template: ` <h2>Componente de videojuegos</h2>
			    <h3 *ngIf="mostrar_retro!= true">El mejor juego moderno es: {{ mejor_juego }}</h3>	
			    <h3 [style.background]=color
			   	   *ngIf="mostrar_retro == true">El mejor juego retro es: {{ mejor_juego_retro }}
			   	</h3>
			   	<br>
			   	<h2>Listados de videojuegos</h2>
			   	<ul>
			   		<li *ngFor="let game of videojuegos">{{game}}</li>
			   	</ul>	
	`
})

//Exporto la calse para poder usarla fuera del fichero
export class VideoJuegosComponent{
	public nombre = 'VideoJuegos 2019';
	public mejor_juego = 'Assasains creed';
	public mejor_juego_retro = 'Super Mario 64';
	public mostrar_retro = false;
	public color = "blue";

	public videojuegos = [
		'Los simpson hit and run',
		'Assasains creed',
		'GTA V',
		'Call of Dutty',
		'Tekken'
	];
}