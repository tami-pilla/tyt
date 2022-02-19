import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.css']
})
export class ModalContactComponent implements OnInit {

  constructor(private modalS: SwitchService) { }

  ngOnInit(): void {
  }

  //Se crea una funcion que emita un valor (false) que sea capturado por el modalSwitch y asi cierre el modal
  //Se necesita injectar el servicio en el constructor 
  //A traves del servicio se comunican los componentes. 

  closeModal(){
    this.modalS.$modal.emit(false)
  }
}
