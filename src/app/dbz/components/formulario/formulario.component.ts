import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    id: '',
    nombre: '',
    poder: 0
  };

  enviarPersonaje() {

    if (this.personaje.nombre.length === 0) return;
    this.onNewPersonaje.emit({...this.personaje});

    this.personaje.nombre = '';
    this.personaje.poder = 0;
  }

}
