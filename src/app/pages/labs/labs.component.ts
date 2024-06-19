import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; //Import para usar ngFor

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Welcome to the Todo App';
  tasks = signal([
    'Instalar Angular CLI',
    'Crear Proyecto',
    'Crear Componentes'
  ]);
  name = signal('Pablo');
  age = 42;
  img = 'https://w3schools.com/howto/img_avatar.png';
  disabled = true;

  person = {
    name: 'Pablo',
    age: 42,
    img: 'https://w3schools.com/howto/img_avatar.png'
  };
  
  clickHandler(){
    alert('Hola');
  };

  changeHandler(event: Event){  
    const input = event.target as HTMLInputElement;
    const newValue = input.value; 
    this.name.set(newValue);
  
  }

  keyHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
