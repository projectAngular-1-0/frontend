import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {


  constructor(public modalService: ModalService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }

  contactoFede(f: NgForm): void{
    console.log(f);
  }
}
