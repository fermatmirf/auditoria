import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public status: string;
  public user: User;
  public identity: User;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private userService: UserService
  ){ 
    this.user = new User("","","","","","","ROLE_USER","");
  }

  ngOnInit() {
    console.log('Componente login cargado');
  }
  onSubmit(loginForm):void{
   this.userService.signup(this.user).subscribe(
     response => {
      this.identity = response.user;
      console.log('Este es el identity'+this.identity);
      
      if(!this.identity || !this.identity._id){
        this.status = 'error';
      }
      else{
        this.status = 'success';
        //persistir datos del usuario
        localStorage.setItem('identity', JSON.stringify(this.identity));
        //conseguir el token
        this.getToken();
        loginForm.reset();

      }
     },
     error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          if(errorMessage != null){
            this.status = 'error';
          }          
     }
   );
  }
  
  getToken():void{
    this.userService.signup(this.user, 'true').subscribe(
      response => {
       this.token = response.token;
       console.log('este es el token '+this.token);
       
       if(this.token.length <= 0){
         this.status = 'error';
       }
       else{
         this.status = 'success';
         //persistir token del usuario
         localStorage.setItem('token',this.token);
         //conseguir los contadores o estadisticas del usuario
         this._router.navigate(['/admin/panel-admin']);
       }
      },
      error => {
           var errorMessage = <any>error;
           console.log(errorMessage);
           if(errorMessage != null){
             this.status = 'error';
           }          
      }
    );
  }
}
