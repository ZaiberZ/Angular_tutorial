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

  // text_color: string = '';
  // btn_disabled: boolean = false;
  
  pexels: string[] = [
    'https://images.pexels.com/photos/1906713/pexels-photo-1906713.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    'https://images.pexels.com/photos/13866923/pexels-photo-13866923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3158814/pexels-photo-3158814.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  ];
  src: string = this.pexels[0];
}
