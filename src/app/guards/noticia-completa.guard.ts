import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {NoticiaService} from '../services/noticia.service'; 

@Injectable({
  providedIn: 'root'
})
export class NoticiaCompletaGuard implements CanActivate {

  constructor(public noticiaService: NoticiaService){

  }

  canActivate(): boolean{
    if(this.noticiaService.noticiaCompleta === true){
      return true;
    }else{
      return false;
    }
  }
  
}
