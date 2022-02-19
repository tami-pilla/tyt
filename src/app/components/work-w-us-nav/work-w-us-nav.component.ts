import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-w-us-nav',
  templateUrl: './work-w-us-nav.component.html',
  styleUrls: ['./work-w-us-nav.component.css']
})
export class WorkWUsNavComponent implements OnInit {

  openMenu:boolean = false;

  constructor() { }

  
  toggleMenu(){
    this.openMenu=!this.openMenu
  }


  ngOnInit(): void {
  }

}
