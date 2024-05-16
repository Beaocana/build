import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Krillin',
      poder: 1000

    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 9500
    },
    {
      id: uuid(),
      nombre: 'Trunks',
      poder: 4500
    }
  ];

  addPersonaje(personaje: Personaje):void {

    const nuevoPersonaje: Personaje = {
      ...personaje,
      id: uuid()
    };

    this.personajes.push(nuevoPersonaje);
  }

  deletePersonajeById(id: string){
    this.personajes = this.personajes.filter( personaje => personaje.id != id);
  }
}
