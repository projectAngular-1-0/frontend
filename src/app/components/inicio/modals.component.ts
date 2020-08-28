import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modals.service";
declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

  constructor(public modalService: ModalService) {
   }

  ngOnInit(): void {
  }

  cerrarSobreMi(): void{
    this.modalService.cerrarSobreMi();
  }

}
