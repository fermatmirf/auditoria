import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JornadaService } from '../../services/jornada/jornada.service';
import { Jornada } from '../../models/jornada';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-editar-jornada',
  templateUrl: './editar-jornada.component.html',
  styleUrls: ['./editar-jornada.component.css']
})
export class EditarJornadaComponent implements OnInit {
  public jornada: Jornada;
  public user: User;
  public token;
  public identity;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _jornadaService: JornadaService,
    private _userService: UserService
  ){
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
   }

  ngOnInit() {
  }
  onSubmit(){
    this._jornadaService.updateJornada(this.jornada).subscribe(
      response => {
        if(!response.jornada){
          this.status = 'error';
        }
        else{
          this.status = 'success';
          //podria navegar a listar jornada
        }
      },
      error => {
        var errorMessage = <any> error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );
  }

}
