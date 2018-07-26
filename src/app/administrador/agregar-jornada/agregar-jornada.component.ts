import { Component, OnInit } from '@angular/core';
import { Jornada } from '../../models/jornada';
import { JornadaService } from '../../services/jornada/jornada.service';
import { Expositor } from '../../models/expositor';
import { Tematica } from '../../models/tematica';
import { Organizador } from '../../models/organizador';
import { expositoresMock } from '../mocks/expositor';
import { organizadoresMock } from '../mocks/organizador';
import { tematicasMock } from '../mocks/tematica';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';
import { ExpositorService } from '../../services/expositor/expositor.service';
import { OrganizadorService } from '../../services/organizador/organizador.service';
import { TematicaService } from '../../services/tematica/tematica.service';

@Component({
  selector: 'app-agregar-jornada',
  templateUrl: './agregar-jornada.component.html',
  styleUrls: ['./agregar-jornada.component.css']
})
export class AgregarJornadaComponent implements OnInit {
  public jornada: Jornada;
  public jornadaReceived: Jornada;
  public identity: User;
  public expositors: Expositor[];
  public tematics: Tematica[];
  public organizadors: Organizador[];
  public status: string;
  public expositorSelected: Expositor = undefined;
  public tematicaSelected: Tematica = undefined;
  public organizadorSelected: Organizador = undefined;

  public organizadorSelectedTable: Organizador = undefined;
  public expositorSelectedTable: Expositor = undefined;
  public tematicaSelectedTable: Tematica = undefined;

  public expositoresTable: Expositor[];
  public tematicasTable: Tematica[];
  public organizadoresTable: Organizador[];

  constructor(public jornadaService: JornadaService, public userService: UserService, public expositorService: ExpositorService, public organizadorService: OrganizadorService, public tematicaService: TematicaService) {
    /* this.organizadors = organizadoresMock;
    this.tematics = tematicasMock;
    this.expositors = expositoresMock; */
    this.expositoresTable = [];
    this.organizadoresTable = [];
    this.tematicasTable = [];
    this.identity = userService.getIdentity();
    console.log(this.identity);

    this.jornada = new Jornada(1, '', 1, '', '5b557799621c5e25cb620d84', '5b55d5aab3e341230ed3098f', '5b5558bfa3ead918a6bb5368', '', this.identity._id);
  }

  ngOnInit() {
    var id;
    this.getExpositores(id);
    this.getOrganizadores(id);
    this.getTematicas(id);
  }

  onSubmit(registerForm): void {
    this.jornadaService.register(this.jornada).subscribe(
      response => {
        console.log(response);
        this.jornadaReceived = response.jornada;
        if (!this.jornadaReceived || !this.jornadaReceived._id) {
          this.status = 'error'
        }
        else {
          this.status = 'success';
          registerForm.reset();
        }
      }, error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error';
        }
      });
  }
  //funciones para cargar combos de organizadores
  getExpositores(id): void {
    this.expositorService.get(id).subscribe(
      response => {
        this.expositors = response.expositores;
        console.log(this.expositors);
        
      }, error => {

      });
  }
  getTematicas(id): void {
    console.log('lalalal');
    
    this.tematicaService.get(id).subscribe(
      response => {
        this.tematics = response.tematicas;
        console.log(this.tematics);
        
      }, error => {

      });
  }
  getOrganizadores(id): void {
    console.log('lalalal');
    
    this.organizadorService.get(id).subscribe(
      response => {
        console.log(response);
        this.organizadors = response.organizadores;
        console.log(this.organizadors);
        
      }, error => {

      });
  }

  //Funciones para seleccionar elemento de tabla
  onSelectTableOrganizador(organizador: Organizador) {
    this.organizadorSelectedTable = organizador;
  }
  onSelectTableExpositor(expositor: Expositor) {
    this.expositorSelectedTable = expositor;
    console.log(this.expositorSelectedTable);
  }
  onSelectTableTematica(tematica: Tematica) {
    this.tematicaSelectedTable = tematica;
    console.log(this.tematicaSelectedTable);
  }
  //Funciones para seleccionar en combobox
  onSelectExpositor(expositor: Expositor): void {
    this.expositorSelected = expositor;
  }
  onSelectOrganizador(organizador: Organizador): void {
    this.organizadorSelected = organizador;
  }
  onSelectTematica(tematica: Tematica): void {
    this.tematicaSelected = tematica;
  }

  //Funciones para anadir seleccionado de combo box a tabla
  addToTableExpositor(expositor: Expositor): void {
    if (this.expositoresTable.indexOf(expositor) == -1) {
      this.expositoresTable.push(expositor);
    }
    else {
      alert('Ya agrego al expositor');
    }
  }
  addToTableOrganizador(organizador: Organizador): void {
    if (this.organizadoresTable.indexOf(organizador) == -1) {
      this.organizadoresTable.push(organizador);
    }
    else {
      alert('Ya agrego al organizador');
    }
  }
  addToTableTematica(tematica: Tematica): void {
    if (this.tematicasTable.indexOf(tematica) == -1) {
      this.tematicasTable.push(tematica);
      console.log(this.tematicasTable);

    } else {
      alert('Ya agrego la tematica');
    }

  }
  //Funciones para remover el seleccionado de la tabla
  removeExpositorOfTable(expositor: Expositor) {
    var pos = this.expositoresTable.indexOf(expositor);
    this.expositoresTable.splice(pos, 1);
  }
  removeTematicaOfTable(tematica: Tematica) {
    var pos = this.tematicasTable.indexOf(tematica);
    this.tematicasTable.splice(pos, 1);
  }
  removeOrganizadorOfTable(organizador: Organizador) {
    var pos = this.organizadoresTable.indexOf(organizador);
    this.organizadoresTable.splice(pos, 1);

  }

}
