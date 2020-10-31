import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/title.service';

@Component({
  selector: 'eve-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = ""; 

  constructor(private titlePageService: TitlePageService) {
    this.titlePageService.titulo.subscribe((novoTitulo:string) => {
      this.title = novoTitulo;
    })
  }

  ngOnInit(): void {
  }

}
