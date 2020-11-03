import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DragonActionList } from './interfaces/dragonlist.interface';

@Injectable()
export class HomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDragonData() {
    // return this.httpClient.get('http://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
    return this.httpClient.get(`${environment.urlApi}/informacoes`)
    .pipe(
      map((response: DragonActionList) => {
        return response.actions;
      }),
      catchError((error) => {
        throw new Error('Algo deu errado');
      })  
    )
  }

  getCEP(cep: string) {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
