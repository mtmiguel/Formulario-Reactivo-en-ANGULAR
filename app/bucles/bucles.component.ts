
import { Component } from '@angular/core';
import { persona } from '../persona';


@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {


  personas : persona[] = [

      {nombre:'darwin', edad: 37 },
      {nombre:'John', edad: 37 },
      {nombre:'miguel', edad: 19 },



  ];


}
