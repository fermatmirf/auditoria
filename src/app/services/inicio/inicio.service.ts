import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InicioService {

  constructor(public http: HttpClient) { }
  
  getNoticias():Observable<any>{
    console.log('llegue al servicio');
    
    return this.http.get('http://localhost:3800/api/segurInfo');
  }
}
