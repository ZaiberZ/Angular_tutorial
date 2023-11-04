import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas: Persona[] = [
    { nombre: "Pez", edad: 51 }, 
    { nombre: "Gato", edad: 45 }, 
    { nombre: "Arbol", edad: 76 }, 
    { nombre: "Pezcera", edad: 35 },
    { nombre: "No se que poner", edad: 53 }
  ];
}
