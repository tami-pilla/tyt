import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.css']
})
export class ContactNavComponent implements OnInit {

  header_animation = false;

  openMenu = false;

  constructor() { }

  @HostListener('document:scroll')
  headerScroll() {
    if (document.documentElement.scrollTop > 100) {
      this.header_animation = true;
    } else {
      this.header_animation = false;
    }
  }

  
  toggleMenu(){
    this.openMenu=!this.openMenu;
  }

  ngOnInit(): void {
  }

}
