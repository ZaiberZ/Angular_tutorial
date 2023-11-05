import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component {
  procesar() {
    console.log(this.persona);
  }
  persona = {
    nombre: "",
    edad: ""
  };
}
