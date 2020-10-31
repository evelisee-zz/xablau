import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TitlePageService {
 titulo = new Subject<string>();

 atualizaTitulo(novoTitulo: string){
    document.title = `${novoTitulo} - Xablau`;
    this.titulo.next(novoTitulo);
 }
}
