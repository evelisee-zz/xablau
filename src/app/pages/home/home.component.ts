import { Component } from '@angular/core';
import { Personas } from './interfaces/persona.interface';



@Component({
  selector: 'eve-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  search = "";


  personas: Array<Personas> = [
    {
        "classe":  "Bárbaro",
        "descricao": "A fierce warrior of primitive background who can enter a battle rage",
    },
    {
        "classe":  "Bardo",
        "descricao": "An inspiring magician whose power echoes the music of creation"
    },
    {
        "classe":  "Paladino",
        "descricao": "A holy warrior bound to a sacred oath"
    },
    {
        "classe":  "Mago",
        "descricao": "A scholarly magic-user capable of manipulating the structures of reality"
    },
    {
        "classe":  "Druída",
        "descricao": "A priest of the Old Faith, wielding the powers of nature and adopting animal forms"
    }
    ]

    favoritar(index: number) {
      this.personas[index].favoritado = !this.personas[index].favoritado
    }


  pesquisar(value: string) {
    this.search = value;
  }
}
