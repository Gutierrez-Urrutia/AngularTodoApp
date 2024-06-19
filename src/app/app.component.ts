import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; //Import para usar ngFor


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], //Se agrega CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  welcome = 'Welcome to the Todo App';
  tasks = [
    'Instalar Angular CLI',
    'Crear Proyecto',
    'Crear Componentes'
  ];
}
