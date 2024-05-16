import { Component } from '@angular/core';

@Component({
  selector: 'heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

    public nombres: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Batman'];
    public heroeBorrado?: string; //?indica que va a ser opcional, ya que puede no tener valor

    borrarUltimoHeroe(): void {
      this.heroeBorrado = this.nombres.pop()
    }
}
