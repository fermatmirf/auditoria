import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Organizador } from '../../models/organizador';

@Injectable()
export class OrganizadorService {
  public url:string;
  public urlLocal:string;
  public identity;
  public token;

  constructor(public http: HttpClient, private userService:UserService) {
    this.url = GLOBAL.url;
    this.urlLocal = GLOBAL.urlLocal;
  }
  register(organizador: Organizador): Observable<any> {
    let params = JSON.stringify(organizador);
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', this.userService.getToken());//porque node esta preparado para recibir JSON, sino seria unrenlcoded
    console.log(params);
    // VER BIEN EL TEMA DE LA RUTA Y DEL API
    return this.http.post(this.urlLocal+'organizador', params, {headers: headers});
  }
  update(organizador:Organizador): Observable<any> {
    let params = JSON.stringify(organizador);
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization',this.userService.getToken());
    return this.http.put(this.url+'organizador/'+organizador._id, params, {headers: headers});                                   
  }
  get(id) :Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                    .set('Authorization',this.userService.getToken());
    if(id){
      return this.http.get(this.url+'organizador/'+id,{headers:headers});                                    
    }                                    
    return this.http.get(this.url+'organizador',{headers:headers});                                    
  }
}

