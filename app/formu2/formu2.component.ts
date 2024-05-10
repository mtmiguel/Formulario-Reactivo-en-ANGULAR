import { Component } from '@angular/core';

@Component({
  selector: 'app-formu2',
  templateUrl: './formu2.component.html',
  styleUrl: './formu2.component.css'
})
export class Formu2Component {


  procesar(){  //defini una funcion
    console.log(this.person); //para que me muestre los valores de este formulario (EL DE ABAJO) LOS QUE DEFINI EN EL HTML
  }

  person = { 
    nombre:'' ,
    
    edad:'' 
  };


}
