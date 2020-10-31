import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
