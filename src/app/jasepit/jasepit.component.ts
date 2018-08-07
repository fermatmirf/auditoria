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
  public status : string;

  constructor(private jornadaService: JornadaService) { 
    this.jornada = new Jornada('','',1,'',[],[],[],'','');
  }

  ngOnInit() {
    this.cargarUltimaJornada();
  }

  cargarUltimaJornada(){
    this.jornadaService.getUltimaJornada().subscribe(
      response => {
        if(!response){
          
          this.status = 'error'
        }
        else{

          this.jornada = response.jornada;
          console.log('la jornada es: '+this.jornada.organizadores);
          
          this.status = 'success'
        }
      }, error => {
        console.log(error);
        
      });
  }
}
