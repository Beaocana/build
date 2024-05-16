import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListaPersonajesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
