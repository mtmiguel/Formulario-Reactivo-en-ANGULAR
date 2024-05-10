import { Component } from '@angular/core';
import { persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  persona:persona  = {
    nombre:  'miguel',
    edad: 50
  };
}
