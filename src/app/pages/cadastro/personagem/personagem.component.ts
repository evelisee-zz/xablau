import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {
  @Input() dados;
  @Output() change = new EventEmitter();


  disparar() {
    this.change.emit(this.dados);
  }
}
