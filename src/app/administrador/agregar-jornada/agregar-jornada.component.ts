import { Component, OnInit } from '@angular/core';
import { Jornada } from '../../models/jornada';
import { JornadaService } from '../../services/jornada/jornada.service';
import { Expositor } from '../../models/expositor';
import { Tematica } from '../../models/tematica';
import { Organizador } from '../../models/organizador';
import {expositoresMock} from '../mocks/expositor';
import {organizadoresMock} from '../mocks/organizador';
import {tematicasMock} from '../mocks/tematica';

@Component({
  selector: 'app-agregar-jornada',
  templateUrl: './agregar-jornada.component.html',
  styleUrls: ['./agregar-jornada.component.css']
})
export class AgregarJornadaComponent implements OnInit {
  public jornada: Jornada;
  public expositors: Expositor[];
  public tematics: Tematica[];
  public organizadors: Organizador[];
  public status: string;
  public expositorSelected: Expositor = undefined;
  public tematicaSelected: Tematica = undefined;
  public organizadorSelected: Organizador = undefined;
  public expositoresTable: Expositor[];
  public tematicasTable: Tematica[];
  public organizadoresTable: Organizador[];

  constructor(public jornadaService: JornadaService) {
    this.organizadors = organizadoresMock;
    this.tematics = tematicasMock;
    this.expositors = expositoresMock;
    this.expositoresTable = [];
    this.organizadoresTable = [];
    this.tematicasTable = [];
    this.jornada = new Jornada(1,'',1,'',this.organizadoresTable,this.expositoresTable,this.tematicasTable,'');
  }

  ngOnInit() {
  }
  
  onSubmit(loginForm):void{
  }

  onSelectExpositor(expositor: Expositor): void {
    this.expositorSelected = expositor;
  }
  onSelectOrganizador(organizador: Organizador): void {
    this.organizadorSelected = organizador;
  }
  onSelectTematica(tematica: Tematica): void {
    this.tematicaSelected = tematica;
  }
  
  addToTableExpositor(expositor: Expositor):void {
    this.expositoresTable.push(expositor);
  }
  addToTableOrganizador(organizador: Organizador):void {
    this.organizadoresTable.push(organizador);
  }
  addToTableTematica(tematica: Tematica):void {
    this.tematicasTable.push(tematica);
  }
}
