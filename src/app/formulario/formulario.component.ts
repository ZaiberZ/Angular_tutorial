import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  openAlert: boolean = false;

  constructor() { }
  ngOnInit(): void {

  }


  showConsole(name: string) {
    console.log(name);
    this.openAlert = true;
  }

}
