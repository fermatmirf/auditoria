import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Tematica } from '../../models/tematica';

@Injectable()
export class TematicaService {
  public url:string;
  public urlLocal:string;
  public identity;
  public token;

  constructor(public http: HttpClient, private userService:UserService) {
    this.url = GLOBAL.url;
    this.urlLocal = GLOBAL.urlLocal;
  }

  register(tematica: Tematica): Observable<any> {
    let params = JSON.stringify(tematica);
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', this.userService.getToken());//porque node esta preparado para recibir JSON, sino seria unrenlcoded
    console.log(params);
    // VER BIEN EL TEMA DE LA RUTA Y DEL API
    return this.http.post(this.urlLocal+'tematica', params, {headers: headers});
  }
  update(tematica:Tematica): Observable<any> {
    let params = JSON.stringify(tematica);
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization',this.userService.getToken());
    return this.http.put(this.url+'tematica/'+tematica._id, params, {headers: headers});                                   
  }
  get(id) :Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                    .set('Authorization',this.userService.getToken());
    if(id){
      return this.http.get(this.url+'tematica/'+id,{headers:headers});                                    
    }                                    
    return this.http.get(this.url+'tematica',{headers:headers});                                    
  }
}
