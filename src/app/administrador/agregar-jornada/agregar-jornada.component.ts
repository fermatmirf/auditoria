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
  public expositoresTableIds: string[];
  public tematicasTable: Tematica[];
  public tematicasTableIds: string[];
  public organizadoresTable: Organizador[];
  public organizadoresTableIds: string[];

  constructor(public jornadaService: JornadaService, public userService: UserService, public expositorService: ExpositorService, public organizadorService: OrganizadorService, public tematicaService: TematicaService) {
    /* this.organizadors = organizadoresMock;
    this.tematics = tematicasMock;
    this.expositors = expositoresMock; */
    this.expositoresTable = [];
    this.organizadoresTable = [];
    this.tematicasTable = [];
    this.tematicasTableIds = [];
    this.organizadoresTableIds = [];
    this.expositoresTableIds = [];
    this.identity = userService.getIdentity();
    console.log(this.identity);

    this.jornada = new Jornada('', '', 1, '',this.organizadoresTableIds, this.expositoresTableIds, this.tematicasTableIds, '', this.identity._id);
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
    this.organizadorService.get(id).subscribe(
      response => {
        console.log(response);
        this.organizadors = response.organizadores;
        console.log(this.organizadors);
        console.log("edehdyehdyehydhedhyhyedyhedyhedyhdehyedyh");
        
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
    if (this.expositoresTableIds.indexOf(expositor._id) == -1) {
      this.expositoresTableIds.push(expositor._id);
      this.expositoresTable.push(expositor);
      console.log(this.expositoresTableIds);
      
    }
    else {
      alert('Ya agrego al expositor');
    }
  }
  addToTableOrganizador(organizador: Organizador): void {
    if (this.organizadoresTableIds.indexOf(organizador._id) == -1) {
      this.organizadoresTable.push(organizador);
      this.organizadoresTableIds.push(organizador._id);
      console.log(this.organizadoresTableIds);
    }
    else {
      alert('Ya agrego al organizador');
    }
  }
  addToTableTematica(tematica: Tematica): void {
    console.log('El array de tematicas ids es:'+this.tematicasTableIds);
    
    if (this.tematicasTableIds.indexOf(tematica._id) == -1) {
      this.tematicasTableIds.push(tematica._id);
      this.tematicasTable.push(tematica);
      console.log(this.tematicasTableIds);

    } else {
      alert('Ya agrego la tematica');
    }

  }
  //Funciones para remover el seleccionado de la tabla
  removeExpositorOfTable(expositor: Expositor) {
    var pos = this.expositoresTable.indexOf(expositor);
    var pos1 = this.expositoresTableIds.indexOf(expositor._id);
    this.expositoresTable.splice(pos, 1);
    this.expositoresTableIds.splice(pos1,1);

  }
  removeTematicaOfTable(tematica: Tematica) {
    var pos = this.tematicasTable.indexOf(tematica);
    var pos1 = this.tematicasTableIds.indexOf(tematica._id);
    this.tematicasTable.splice(pos, 1);
    this.tematicasTableIds.splice(pos1,1);
  }
  removeOrganizadorOfTable(organizador: Organizador) {
    var pos = this.organizadoresTable.indexOf(organizador);
    var pos1 = this.organizadoresTableIds.indexOf(organizador._id);
    this.organizadoresTable.splice(pos, 1);
    this.organizadoresTableIds.splice(pos1,1);
  }
}
