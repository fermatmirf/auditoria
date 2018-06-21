import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jornada } from '../../models/jornada';

@Injectable()
export class JornadaService {
  public url:string;
  public identity;
  public token;

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
    console.log('Hello UserProvider Provider');
  }

  register(jornada: Jornada): Observable<any> {
    
    let params = JSON.stringify(jornada);
    let headers = new HttpHeaders().set('Content-Type','application/json');//porque node esta preparado para recibir JSON, sino seria unrenlcoded
    console.log(params);
 // VER BIEN EL TEMA DE LA RUTA Y DEL API
    return this.http.post(this.url+'register', params, {headers: headers});
    }
}