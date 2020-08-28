import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {NoticiaService} from "../../services/noticia.service";
declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  mostrarYo: boolean = true;

  constructor(
    private router: Router,
    private noticiaService: NoticiaService
    ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    $(()=>{
      $('[data-toggle="tooltip"]').tooltip();
    })
    this.noticiaService.noticiaCompleta = false;
  }

  yoMostrar(): void{
    this.mostrarYo = !this.mostrarYo;
  }
  
  tecnologias(): void{
    $("#modalTecnologias").modal();
  }

  abrirSobreMi(): void{
    $("#sobreMi").modal();
  }

  mostrarNoticia(): void{
    
    this.noticiaService.noticiaCompleta = true;

    setTimeout(()=>{
      this.router.navigateByUrl("noticiaCompleta");
    },150);

    $(()=>{
      $('[data-toggle="tooltip"]').tooltip("hide");
    })
  }
}
