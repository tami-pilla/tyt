import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Variable que va a servir como interruptor true/false abrir/cerrar
  //Se declara en el componente en donde inicia la logica, en donde esta el btn de abrir el modal
  modalSwitch: boolean | undefined;

  constructor(private modalS:SwitchService) { }
 

  ngOnInit(): void {

    //Apenas se incie el componente hay que suscribirse/escuchar/observar/obtener el valor del objeto $modal.
    //Se injecta el servicio en el constructor
    //Se llama al servicio, al observable $modal y se le indica que se va a suscribir/observar el valor.
    //Luego con una funcion callback se va a indicar que la variable booleana modalSwitch va a ser igual a ese valor escuchado. 

    this.modalS.$modal.subscribe((valor) => {this.modalSwitch = valor})

  }

  openModal():void {
    this.modalSwitch = true;
  }


}
