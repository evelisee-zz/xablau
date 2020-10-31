import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonagemComponent } from './personagem/personagem.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent
  }
]

@NgModule({
  declarations: [
    CadastroComponent,
    PersonagemComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CadastroModule { }
