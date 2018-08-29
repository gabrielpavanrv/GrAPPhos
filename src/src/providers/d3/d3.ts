import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the D3Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class D3Provider {

  constructor(public http: HttpClient) {
    console.log('Hello D3Provider Provider');
  }

}
