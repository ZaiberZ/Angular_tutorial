import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  constructor() { }
  ngOnInit(): void {

  }

  text_color: string = '';
  btn_disabled: boolean = false;
}
