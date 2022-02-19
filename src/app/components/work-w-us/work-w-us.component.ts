import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-work-w-us',
  templateUrl: './work-w-us.component.html',
  styleUrls: ['./work-w-us.component.css']
})
export class WorkWUsComponent implements OnInit {

  modalSwitch: boolean | undefined;
 

  constructor(private modalS:SwitchService  , public el: ElementRef) { }


  //  upload files
  // incluir una etiqueta span con el id= chosen-file 
  // llamar al evento change en el boton original que esta escondido. Se devuelve un objeto que contiene los detalles (name y size) del archivo subido.
  // Luego se determina el text.content del span con la propiedad del  archivo del objeto que es devuelto(con el ID del archivo elegido)


  ngOnInit(): void {

    this.modalS.$modal.subscribe((valor => {this.modalSwitch = valor}))

  }

  openModal(): void {
    this.modalSwitch = true;
  }


}
