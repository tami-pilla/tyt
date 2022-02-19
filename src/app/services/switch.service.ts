import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  //Se crea un objeto observable $modal. Un objeto que va a emitir un valor que contantemente se va a estar observando
  //El observable va a der un objeto instanciado de la clase EventEmitter
  //El valor que emita este objeto se lo va a entregar a la variable booleana modalSwitch
  $modal = new EventEmitter<any>();



}
