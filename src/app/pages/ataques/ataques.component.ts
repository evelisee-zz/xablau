import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/title.service';

@Component({
  selector: 'eve-ataques',
  templateUrl: './ataques.component.html',
  styleUrls: ['./ataques.component.css']
})
export class AtaquesComponent{
  valorD20 = 0;

  constructor(private titlePageService: TitlePageService){
    this.titlePageService.atualizaTitulo('Ataques');
  }
  
  rodarD20() {
    this.valorD20 = Math.floor(Math.random() * 20 + 1);
  }

}
