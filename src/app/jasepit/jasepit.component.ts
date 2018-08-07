import { Component, OnInit } from '@angular/core';
import { JornadaService } from '../services/jornada/jornada.service';
import { Jornada } from '../models/jornada';

@Component({
  selector: 'app-jasepit',
  templateUrl: './jasepit.component.html',
  styleUrls: ['./jasepit.component.css']
})
export class JasepitComponent implements OnInit {
  public jornada: Jornada;
  public status:string;

  constructor(public jornadaService: JornadaService) { 
    this.jornada = new Jornada('', '', 1, '',[], [], [], '', '');

  }

  ngOnInit() {
  this.getJornadas();
  }

  getJornadas(): void {
    var id;
    this.jornadaService.getUltimaJornada().subscribe(response => {
      if (!response) {

        this.status = 'error'
      }
      else {

        this.jornada = response.jornada;
        this.status = 'success'
      }
    }, error => {
      var errorMessage = <any>error;
      console.log(errorMessage);
      if (errorMessage != null) {
        this.status = 'error';
      }
    });
  }
}
