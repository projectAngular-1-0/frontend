import { Component, OnInit } from '@angular/core';
import {NoticiaService} from '../../services/noticia.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  constructor(
    private noticiaService: NoticiaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.noticiaService.noticiaCompleta = false;
  }

  noticias = [
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia1.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia2.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia3.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia4.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia5.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia6.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia7.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia8.jpg'
    }
  ];

  mostrarNoticia(noticia: Object): void{
    this.noticiaService.noticiaSel = noticia;
    console.log(this.noticiaService.noticiaSel);
    this.noticiaService.noticiaCompleta = true;
    this.router.navigateByUrl('noticiaCompleta');
  }

}
