import { Component } from '@angular/core';

@Component({
  selector: 'heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = "Ironman";
  public edad: number = 45;

  get nombreMayusculas():string {
    return this.nombre.toUpperCase();
  }

  getstring(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre = "Spiderman";
  }

  cambiarEdad():void{
    this.edad = 19;
  }

  resetFormulario():void {
    this.nombre = "Ironman";
    this.edad = 45;
  }
}
