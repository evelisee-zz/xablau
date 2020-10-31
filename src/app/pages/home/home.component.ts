import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/title.service';
import { HomeService } from './home.service';
import { Personas } from './interfaces/persona.interface';


export interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ddd: string;
}
export interface DragonActionList {
  actions: Array<DragonListInfo>;
}

export interface DragonListInfo {
  favorited: boolean;
  name: string;
  desc: string;
}

@Component({
  selector: 'eve-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  search = "";
  personas;
  valorDoCEP = "";
  endereco = {
    "cep": "",
    "logradouro": "",
    "complemento": "",
    "bairro": "",
    "localidade": "",
    "uf": "",
    "ddd": "11",
  };

  constructor(
    private titlePageService: TitlePageService,
    private homeService: HomeService,
  ){
    this.titlePageService.atualizaTitulo('Home');
  }

  ngOnInit() {
    this.homeService.getDragonData().subscribe((list: DragonActionList) => {
      console.log(list.actions);
      this.personas = list.actions;
    })
  }
    favoritar(index: number) {
      this.personas[index].favorited = !this.personas[index].favorited
    }


  pesquisar(value: string) {
    this.search = value;
  }

  inputCep(value:string) {
    this.valorDoCEP = value;
  }
  
  buscarNaApi() {
    this.homeService.getCEP(this.valorDoCEP).subscribe(
      //deu bom
      (endereco: Endereco) => {
        this.endereco = endereco;
      },
      //deu ruim
      (erro) => {
        alert(erro)
      }
    );
  }
}
