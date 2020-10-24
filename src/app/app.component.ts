import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AUHAUAHUAHUAHAUHAUAHUAHUAHAUHAUHAUAHUA';
  teste = 34 + 2;
  disabledButton = false;
  avatar = "https://avatars2.githubusercontent.com/u/22223345?s=460&u=464e1e65dfb54dcebfd508e7697e123963e776b7&v=4";
  private _customClass = "";
  private _ngClassCustom = false;

  ngOnInit(): void {
    console.log('Component iniciou');
  }


  get ngClassCustom() {
    return this._ngClassCustom;
  }

  // get customClass(){
  //   return this._customClass;
  // }

  enviar() {
    this._ngClassCustom = !this._ngClassCustom;
    // if(this._customClass === "") {
    //   this._customClass = "hide";
    // } else {
    //   this._customClass = "";
    // }
  }

  input(){
    console.log('ta digitando')
  }

}
