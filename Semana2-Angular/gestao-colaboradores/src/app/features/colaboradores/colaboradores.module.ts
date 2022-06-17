import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaColaboradoresComponent } from './components/lista-colaboradores/lista-colaboradores.component';



@NgModule({
  declarations: [
    ListaColaboradoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaColaboradoresComponent
  ]
})
export class ColaboradoresModule { }
