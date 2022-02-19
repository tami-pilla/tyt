import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})


export class ServicesComponent implements OnInit {


  openMenu:boolean = false;

  constructor(private renderer2: Renderer2) { }



  toggleMenu(){
    this.openMenu=!this.openMenu
  }



  ngOnInit(): void {

  }

}
