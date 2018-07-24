import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jornada } from '../../models/jornada';
import { UserService } from '../user/user.service';

@Injectable()
export class JornadaService {
  public url:string;
  public urlLocal:string;
  public identity;
  public token;

  constructor(public http: HttpClient, private userService:UserService) {
    this.url = GLOBAL.url;
    this.urlLocal = GLOBAL.urlLocal;
    console.log('Hello UserProvider Provider');
  }

  register(jornada: Jornada): Observable<any> {
    let params = JSON.stringify(jornada);
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', this.userService.getToken());//porque node esta preparado para recibir JSON, sino seria unrenlcoded
    console.log(params);
    // VER BIEN EL TEMA DE LA RUTA Y DEL API
    return this.http.post(this.urlLocal+'jornada', params, {headers: headers});
  }
  updateJornada(jornada:Jornada): Observable<any> {
    let params = JSON.stringify(jornada);
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization',this.userService.getToken());
    return this.http.put(this.url+'jornada/'+jornada._id, params, {headers: headers});                                   
  }
}