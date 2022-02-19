import { Component, OnInit, HostListener } from '@angular/core';

import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {


  menuList: boolean = false;

  openMenu:boolean = false;


  constructor() { }


  toggleMenu(){
    this.openMenu=!this.openMenu
  }

  ngOnInit(): void {
  }

}
