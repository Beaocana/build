import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  get personajes(): Personaje[] {
    return [...this.dbzService.personajes];
  }

  onDeletePersonaje (id: string):void {
    this.dbzService.deletePersonajeById(id);
  }

  onNewPersonaje(personaje: Personaje):void {
    this.dbzService.addPersonaje(personaje);
  }
}
