import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonagemComponent } from './personagem/personagem.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PersonagemService } from './personagem/personagem.service';

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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    // PersonagemService
  ]
})
export class CadastroModule { }
