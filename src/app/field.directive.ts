import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[eveField]'
})
export class FieldDirective implements OnInit {

  constructor(
    private campo: ElementRef
  ) { }
  
  ngOnInit(): void {
    console.log(this.campo);
    const campo = this.campo.nativeElement;

    if(campo.name){
      campo.setAttribute('placeholder', `digite o ${campo.name}`);

    } else {
      throw new Error("Atributo 'name' é obrigatório");
    }

  }

}
