import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { trigger, style, transition, animate, state } from '@angular/animations';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuList: boolean = false;

  header_animation = false;

  openMenu = false;
 

  // Variable que va a servir como interruptor true/false abrir/cerrar
  //Se declara en el componente en donde inicia la logica, en donde esta el btn de abrir el modal
  modalSwitch: boolean | undefined;

  constructor(private modalS: SwitchService) { }

  @HostListener('document:scroll')
  headerScroll() {
    if (document.documentElement.scrollTop > 100) {
      this.header_animation = true;
    } else {
      this.header_animation = false;
    }
  }

  toggleMenu(){
    this.openMenu=!this.openMenu
  }



 

  //Apenas se incie el componente hay que suscribirse/escuchar/observar/obtener el valor del objeto $modal.
  //Se injecta el servicio en el constructor
  //Se llama al servicio, al observable $modal y se le indica que se va a suscribir/observar el valor.
  //Luego con una funcion callback se va a indicar que la variable booleana modalSwitch va a ser igual a ese valor escuchado. 
  ngOnInit(): void {
    this.modalS.$modal.subscribe((valor => { this.modalSwitch = valor }))
  }





}


