import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  fav = true;
  valorD20 = 0;
  
  favoritar() {
    this.fav = !this.fav;
  }

  rodarD20() {
    this.valorD20 = Math.floor(Math.random() * 20 + 1);
  }

}
