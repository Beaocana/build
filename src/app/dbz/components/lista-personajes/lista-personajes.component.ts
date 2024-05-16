import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent {

  @Input()
  public personajesLista: Personaje[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id: string): void {
    this.onDelete.emit(id);
  }

}
