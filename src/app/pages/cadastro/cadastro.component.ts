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

  salvar(formCadastro: NgForm) {
    if(formCadastro.invalid) {
      formCadastro.control.markAllAsTouched();
    } else {
      localStorage.setItem('formCadastro', JSON.stringify(this.cadastro));
      formCadastro.control.reset();
    }
  }



}
