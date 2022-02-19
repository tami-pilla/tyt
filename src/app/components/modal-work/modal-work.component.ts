import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal-work',
  templateUrl: './modal-work.component.html',
  styleUrls: ['./modal-work.component.css']
})
export class ModalWorkComponent implements OnInit {

  constructor(private modalS:SwitchService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalS.$modal.emit(false);
  }

}
