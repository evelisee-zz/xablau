import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitlePageService } from 'src/app/core/title.service';

@Component({
  selector: 'eve-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{
  
  cadastro = {
    nome: '',
    classe: '',
    telefone: '',
    nivel: '',
    raca: '',
  }
  cardPersonagem;

  constructor(private titlePageService: TitlePageService){
    this.titlePageService.atualizaTitulo('Cadastro');
  }

  salvar(formCadastro: NgForm) {
    if(formCadastro.invalid) {
      formCadastro.control.markAllAsTouched();
    } else {
      this.cardPersonagem = {...this.cadastro};
      localStorage.setItem('formCadastro', JSON.stringify(this.cadastro));
      formCadastro.control.reset();
    }
  }

  editarPersonagem(fichaPersonagem) {
    this.cadastro = fichaPersonagem;
  }

  selectedSauce(event: boolean) {
    console.log(event);
    console.log(`o valor do molho é ${event}`);
  }



}
