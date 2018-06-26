import { Component, OnInit } from '@angular/core';
import { Jornada } from '../../models/jornada';
import { JornadaService } from '../../services/jornada/jornada.service';

@Component({
  selector: 'app-agregar-jornada',
  templateUrl: './agregar-jornada.component.html',
  styleUrls: ['./agregar-jornada.component.css']
})
export class AgregarJornadaComponent implements OnInit {
  public jornada: Jornada;
  public status: string;

  constructor(public jornadaService: JornadaService) {
    this.jornada = new Jornada(1,'',1,'','','','','');
  }

  ngOnInit() {
  }
  onSubmit(registerForm):void{
    this.jornadaService.register(this.jornada).subscribe(
      (response) => {
        if(response.user && response.user._id){
          console.log(response.user);
          this.status = 'success';
          registerForm.reset();
        }
        else{
          this.status = 'error';
        }
      },
      (error) => {
        console.log(<any>error);
    });
  }
}
