import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../global';

@Injectable()
export class InicioService {

  constructor(public http: HttpClient) { }
  
  getNoticias():Observable<any>{
    console.log('llegue al servicio');
    let headers = new HttpHeaders().set('Content-Type','application/json');//porque node esta preparado para recibir JSON, sino seria unrenlcoded

    return this.http.get(GLOBAL.url+'segurInfo',{headers: headers});
  }
}
