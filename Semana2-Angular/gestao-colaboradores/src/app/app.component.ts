import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Colaboradores MJV';
  colaborador = 'Nathan Carlos';
  id = '7';
  salario = 'R$ 4500,00';
  cargo = 'Dev Pleno';
}
