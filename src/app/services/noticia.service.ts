import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {

  noticiaSel: object;
  noticiaCompleta: boolean = false;

  constructor() { }
}
