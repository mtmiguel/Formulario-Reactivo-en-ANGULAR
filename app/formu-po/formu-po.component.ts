import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; //esto es importante para poder hacer el formulario

@Component({
  selector: 'app-formu-po',
  templateUrl: './formu-po.component.html',
  styleUrl: './formu-po.component.css'
})
export class FormuPoComponent {

  constructor(private fb:FormBuilder){  //defini un metodo constructor, dentro del metodo defini la variable fb es tipo privada t de tipo formbuilder

  }


  get Rnumber (){
    return this.FormUser.get('Rnumber') as FormControl; // esto para que me muestre las reglas de validacion en las alertas
  }
  get Prefix (){
    return this.FormUser.get('Prefix') as FormControl;
  }

  get initialRange (){
    return this.FormUser.get('initialRange') as FormControl;
  }

  
  get finalRange(){
    return this.FormUser.get('finalRange') as FormControl;
  }


  get resolutionDate(){
    return this.FormUser.get('resolutionDate') as FormControl;
  }

  get description(){
    return this.FormUser.get('description') as FormControl;
  }

  get resolutionFile(){
    return this.FormUser.get('resolutionFile') as FormControl;
  }


  get active(){
    return this.FormUser.get('active') as FormControl;
  }

  get  vigencyMonth(){
    return this.FormUser.get('vigencyMonth') as FormControl;
  }

  get  expirationDate(){
    return this.FormUser.get('expirationDate') as FormControl;
  }

  get resolutionType(){
    return this.FormUser.get('resolutionType') as FormControl;
  }

  get clientBillingElectronicId(){
    return this.FormUser.get('clientBillingElectronicId') as FormControl;
  }

procesar (){ //defini una funcion (metodo) LLAMADA PROCESAR 
  console.log(this.FormUser.value); //Para que me muestre los nombres de los formularios YA SEA ESTE ("console.log(this.FormUser.value" O ESTE (FormUser = this.fb.group ) que es el otro metodo hecho con el constructor
}


FormUser = this.fb.group ({   //defini una propiedad formUser y llamar al constructor (fb) Y CREE UN NUEVO GRUPO (GROUP)

  Rnumber: ['', Validators.required,  Validators.min(0) ],  //EL PRIMER ELEMENTO VA A TENER EL VALOR POR DEFECTO Y EL SEGUNDO HACE REFERENCIA A LA REGLA DE VALIDACION
  Prefix: ['', [Validators.required,  Validators.min(0) ,Validators.maxLength(6)]],
  initialRange: ['', [Validators.required, Validators.min(0), Validators.max(99999999999)]],
  finalRange: ['', [Validators.required, Validators.min(0),  Validators.max(99999999999)]],
  resolutionDate: ['', Validators.required],
  description: ['', Validators.required],
  resolutionFile:  ['', Validators.required],
  active : true,
  vigencyMonth: ['',[ Validators.required , Validators.min(1),  Validators.max(2)]],
  expirationDate: ['', Validators.required],
  resolutionType: ['', Validators.required],
  clientBillingElectronicId: ['', Validators.required]
}); 


/* 1 PUEDO HACERLO ASI O COMO EL DE ARRIBA
FormUser = new FormGroup({
  'Rnumber' : new FormControl ('', Validators.required),
  'Prefix' : new FormControl ('', Validators.required) // el new (es una nueva inStancia, de la clase formcontrol) inicializo con una regla vacia y le doy las reglas de validacion
  
}); */








}


