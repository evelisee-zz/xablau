import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDragonData() {
    // return this.httpClient.get('http://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
    // return this.httpClient.get('http://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
    // .pipe(
    //   map((response) => {
    //     console.log(response)
    //     return null;
    //   })
    // )
  }

  getCEP(cep: string) {
    let headers: HttpHeaders = new HttpHeaders();

    return this
      .httpClient
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(
        map((response: any) => {
          console.log(response)
          return null
        }),
        catchError(error => {
          console.log(error);
          return error
        })  
      )

    // return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
    // .pipe(
    //   map((response) => {
    //     console.log(response);
    //     console.log('adsassa');
    //     return null
    //   })
    // )
  }
}
