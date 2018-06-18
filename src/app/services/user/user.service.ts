import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  public url:string;
  public identity;
  public token;

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
    console.log('Hello UserProvider Provider');
  }

  register(user: User): Observable<any> {
    
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');//porque node esta preparado para recibir JSON, sino seria unrenlcoded
    console.log(params);
 
    return this.http.post(this.url+'register', params, {headers: headers});
}
  signup(user: User, gettoken = null): Observable<any>{
    if(gettoken != null){
      user.gettoken = gettoken;
    }
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url+'login', params, {headers: headers})
  }
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != undefined){
      this.identity = identity;
    }
    else{
      this.identity = null;
    }
    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != 'undefined'){
      this.token = token;
    }
    else{
      this.token = null;
    }
    return this.token;
  }
}
