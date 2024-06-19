import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; //Import para usar ngFor

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Instalar Angular CLI',
    'Crear Proyecto',
    'Crear Componentes'
  ]);
}
