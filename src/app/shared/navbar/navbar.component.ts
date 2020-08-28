import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';
import Swal from 'sweetalert2';
declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  ojo: boolean = true;
  loguin1: boolean = true;
  input1: boolean = false;

  clave: String = "";

  constructor(public modalService: ModalService) {
    this.modalService.ojo2 = true;
   }

  ngOnInit(): void {
  }

  cerrarNavbar(): void{
    $('.navbar-collapse').collapse('hide');
    this.loguin1 =  false;
    this.input1 = false;
  }

  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }

  entrar(){
    this.loguin1 = false;
    this.input1 = true;
    this.modalService.ojo2 = false;
    $(document).ready(()=>{
      $('#focusClave').trigger('focus');
    });
    $('[data-toggle="tooltip"]').tooltip('hide');
  }

  onClick1(){
    this.ojo = false;
    this.loguin1 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

  onClick2(){
    this.ojo = true;
    this.loguin1 = true;
    this.modalService.ojo2 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

  inputLogin(){
    if(this.clave != '123'){
      this.loguin1 = false;
      this.input1 = false;
      this.clave = "";
      this.cerrarNavbar();
  }else{
      this.loguin1 = false;
      this.input1 = false;
      this.clave = "";
      this.cerrarNavbar();
      $("#loginModal").modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
  }
  }

  logOut(): void{
    this.cerrarNavbar();
    this.modalService.logOut();
    this.loguin1 = true;
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: true,
      timer: 3000
    })
    
    Toast.fire({
      title: 'Federica OFFLINE',
      background: "rgb(233,233,0)",
      icon: 'success'
    })
  }
}
