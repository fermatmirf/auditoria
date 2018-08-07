import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { InicioService } from '../services/inicio/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public status : string;
  public info;
  public noticias:string[];
  public i: number;
  public j : number;
  public apretado : number;
  constructor(
    private inicioService:InicioService,
    private _route: ActivatedRoute,
    private _router: Router) {
      this.i = 0;
     }

  ngOnInit() {
    console.log('llegue hasta aqui oninit');
  }
  cambiarEstado():void{
    this.apretado = 1;
  }
  cargarNoticias():void{
    this.inicioService.getNoticias().subscribe(
      response => {
        if(!response){
          this.status = 'error'
        }
        else{
          this.noticias = response.noticias;
          this.status = 'success'
          this.info;
          console.log(this.noticias);
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'Error en traer la noticias'
        }
      }
    );
  }
  verMas():void{
    this._router.navigate(['jasepit']);
  }
  sobreNosotros():void{
    this._router.navigate(['sobre-nosotros']);
  }
}
