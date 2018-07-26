import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user/user.service';

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(
        private _router: Router,
        private _userService: UserService
    ){}
    
    canActivate(){
        let identity = this._userService.getIdentity();
        console.log('estoy en el guard' + identity);
        
        if(identity == undefined || identity == null){
            return true;
        }else{
            this._router.navigate(['registrar-jornada']);
            return false;
        }
    }
}