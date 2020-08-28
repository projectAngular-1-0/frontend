import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  privacidad: boolean;
  privacidadSeleccionada: boolean;
  online: boolean;
  ojo2: boolean;

  mostrar1: boolean = true;
  mostrar2: boolean = false;
  mostrar3: boolean = false;

  clase1: String = "btn btn-warning";
  clase2: String = "btn btn-outline-warning";
  clase3: String = "btn btn-outline-warning";

  constructor() { }

  politicaPrivacidad() {
    this.privacidad = false;
    this.privacidadSeleccionada = true;
    $('input[type="checkbox"]').prop('checked', false);
    $('#alerta').modal('hide');
    setTimeout(() => {
      $('#privacidad').modal();
    }, 500);
  }

  cambioPrivacidad() {
    this.privacidadSeleccionada = !this.privacidadSeleccionada;
  }

  contacto() {
    setTimeout(() => {
      $('input[type="checkbox"]').prop('checked', false);
      this.privacidadSeleccionada = true;
    }, 100);
    $('#alerta').modal('hide');
    setTimeout(()=>{
      $('#contacto').modal();
    },500);

    $(document).ready(() => {
      $('#contacto').on('shown.bs.modal', () => {
        $('#focusInput').trigger('focus');
      });
    });
  }

  logOut(): void{
    this.online=false;
    this.ojo2=true;
  }

  opcion1(): void{
    this.mostrar1=true;
    this.mostrar2=false;
    this.mostrar3=false;
    this.clase1 = "btn btn-warning";
    this.clase2 = "btn btn-outline-warning";
    this.clase3 = "btn btn-outline-warning";
  }

  opcion2(): void{
    this.mostrar1=false;
    this.mostrar2=true;
    this.mostrar3=false;
    this.clase1 = "btn btn-outline-warning";
    this.clase2 = "btn btn-warning";
    this.clase3 = "btn btn-outline-warning";
  }

  opcion3(): void{
    this.mostrar1=false;
    this.mostrar2=false;
    this.mostrar3=true;
    this.clase1 = "btn btn-outline-warning";
    this.clase2 = "btn btn-outline-warning";
    this.clase3 = "btn btn-warning";
  }

  cerrarTec(): void{
    $("#modalTecnologias").modal("hide");
    setTimeout(()=>{
      this.opcion1();
    }, 500)
  }

  cerrarSobreMi(): void{
   $("#sobreMi").modal("hide"); 
  }
}