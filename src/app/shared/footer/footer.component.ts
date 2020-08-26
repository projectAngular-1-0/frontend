import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ModalService} from '../../services/modals.service';
declare let $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  year: Number = new Date().getFullYear();

  constructor(public modalService: ModalService) {
    this.modalService.privacidad = true;
  }

  ngOnInit(): void {
  }

  whatsApp(): void{
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      customClass: {confirmButton: 'back9'}
    })
    
    Toast.fire({
      title: '555 555 555',
      background: "rgb(233,233,0)"
    })
  }

  salir(): void{
    setTimeout(()=>{
      $("#privacidad").modal("hide");
    }, 2000);
  }

  privacidad() {
      this.modalService.privacidad = true;
      $('#privacidad').modal();
    }

  irAlerta() {
      $('#privacidad').modal('hide');
      setTimeout(() => {
        $('#alerta').modal();
      }, 500);
    }

}
