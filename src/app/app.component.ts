import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app is changed';
  name: string;
  age: number;
  is_active: Boolean;

  constructor(){
    this.name = 'my app';
    this.age = 12;
    this.is_active = true;
  }
}

