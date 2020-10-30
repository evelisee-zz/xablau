import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eve-ataques',
  templateUrl: './ataques.component.html',
  styleUrls: ['./ataques.component.css']
})
export class AtaquesComponent{
  valorD20 = 0;
  
  rodarD20() {
    this.valorD20 = Math.floor(Math.random() * 20 + 1);
  }

}
