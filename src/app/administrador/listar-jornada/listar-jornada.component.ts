import { Component, OnInit } from '@angular/core';
import { JornadaService } from '../../services/jornada/jornada.service';
import { Jornada } from '../../models/jornada';
import { Expositor } from '../../models/expositor';
import { Organizador } from '../../models/organizador';
import { Tematica } from '../../models/tematica';
import { FormGroup, FormControl, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../services/user/user.service';
import { ExpositorService } from '../../services/expositor/expositor.service';
import { OrganizadorService } from '../../services/organizador/organizador.service';
import { TematicaService } from '../../services/tematica/tematica.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-listar-jornada',
  templateUrl: './listar-jornada.component.html',
  styleUrls: ['./listar-jornada.component.css']
})
export class ListarJornadaComponent implements OnInit {
  public jornadaForm: FormGroup;
  public identity: User;

  public jornadas: Jornada[];
  public jornadaReceived: Jornada;

  public expositores: Expositor[];
  public organizadores: Organizador[];
  public tematicas: Tematica[];

  public status:string;
  public status1:string;
  
  public jornadaSelectedTable: Jornada;
  public organizadorSelectedTable: Organizador;
  public expositorSelectedTable: Expositor;
  public tematicaSelectedTable: Tematica;

  public expositorSelected: Expositor;
  public organizadorSelected: Organizador;
  public tematicaSelected: Tematica;

  public tematics: Tematica[];
  public organizadors: Organizador[];
  public expositors: Expositor[];

  public arrayOrg: string[];
  public arrayExp: string[];
  public arrayTem: string[];

  public jornadaEditada: Jornada;

  constructor(public jornadaService: JornadaService, private fb: FormBuilder, public userService: UserService, public expositorService: ExpositorService, public organizadorService: OrganizadorService, public tematicaService: TematicaService) {
    this.identity = userService.getIdentity();
    this.jornadaSelectedTable = new Jornada("", "", 1, "", [], [], [], "", this.identity._id);
    this.jornadaEditada = new Jornada("", "", 1, "", [], [], [], "", this.identity._id);

    this.arrayOrg = [];
    this.arrayExp = [];
    this.arrayTem = [];
    this.createForm();
  }

  ngOnInit() {
    var id;
    this.getJornadas();
    this.getOrganizadores(id);
    this.getExpositores(id);
    this.getTematicas(id);

  }
  createForm(): void {
    this.jornadaForm = this.fb.group({
      nombre: ['', Validators.required],
      contacto: ['', Validators.required],
      sede: ['', Validators.required],
      anio: ['', Validators.required]
    });
  }
  getJornadas(): void {
    var id;
    this.jornadaService.getJornadas(id).subscribe(response => {
      if (!response) {

        this.status1 = 'error'
      }
      else {

        this.jornadas = response.jornadas;
        this.jornadas.forEach(jornada => {
          console.log('la jornada es: ' + jornada);

        });
        this.status1 = 'success'
      }
    }, error => {
      var errorMessage = <any>error;
      console.log(errorMessage);
      if (errorMessage != null) {
        this.status1 = 'error';
      }
    });
  }
  updateJornada():void{
    console.log("jornadaEditada antes de entrar al servicio: "+this.jornadaEditada);
    
    this.jornadaService.updateJornada(this.jornadaEditada).subscribe(response =>{
      this.jornadaReceived = response.jornada;
      if (!this.jornadaReceived || !this.jornadaReceived._id) {
        this.status = 'error'
      }
      else {
        this.status = 'success';
      }
    },error=>{
      var errorMessage = <any>error;
      console.log(errorMessage);
      if (errorMessage != null) {
        this.status = 'error';
      }
    });
  }
  onSelectTableJornada(jornada: Jornada): void {
    this.jornadaSelectedTable = jornada;
    console.log("jornada de tabla"+this.jornadaSelectedTable);
    this.jornadaEditada = this.jornadaSelectedTable;
    console.log(this.jornadaEditada);
    
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
        console.log("Organizadores:" + this.organizadors);
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
    var exp;
    for (exp of this.jornadaSelectedTable.expositores) {
      this.arrayExp.push(exp._id);
    }
    if (this.arrayExp.indexOf(expositor._id) == -1) {
      this.arrayExp.push(expositor._id);
      var e: any = expositor;
      this.jornadaSelectedTable.expositores.push(e);
      console.log("JornadaEditadaexpositores");
      console.log(this.jornadaEditada.expositores);
      console.log("arrayJornadaAddExp" + this.jornadaSelectedTable.expositores);
      console.log("arrayIdsAddExp" + this.arrayExp);
    }
    else {
      alert('Ya agrego al expositor');
    }
    this.arrayExp = [];
  }
  addToTableOrganizador(organizador: Organizador): void {
    var org;
    console.log("JornadaOrganizadoresAntesForAdd" + this.jornadaSelectedTable.organizadores);
    for (org of this.jornadaSelectedTable.organizadores) {
      console.log("org es: " + org);

      this.arrayOrg.push(org._id);
    }
    console.log("El arrayOrg es: " + this.arrayOrg);
    if (this.arrayOrg.indexOf(organizador._id) == -1) {
      this.arrayOrg.push(organizador._id);
      var o: any = organizador;
      this.jornadaSelectedTable.organizadores.push(o);
      console.log("arrayJornadaAdd" + this.jornadaSelectedTable.organizadores);
      console.log("arrayIdsAdd" + this.arrayOrg);
    }
    else {
      alert('Ya agrego al organizador');
    }
    this.arrayOrg = [];
  }
  addToTableTematica(tematica: Tematica): void {
    var tem;
    for (tem of this.jornadaSelectedTable.tematicas) {
      console.log("tem es: " + tem);

      this.arrayTem.push(tem._id);
    }
    console.log("El arrayTem es: " + this.arrayTem);
    if (this.arrayTem.indexOf(tematica._id) == -1) {
      this.arrayTem.push(tematica._id);
      var t: any = tematica;
      this.jornadaSelectedTable.tematicas.push(t);
      console.log("arrayJornadaAddTem" + this.jornadaSelectedTable.tematicas);
      console.log("arrayIdsAddTem" + this.arrayTem);
    }
    else {
      alert('Ya agrego la tematica');
    }
    this.arrayTem = [];
  }
  //Funciones para remover el seleccionado de la tabla
  removeExpositorOfTable(expositor: Expositor) {
    var exp;
    for (exp of this.jornadaSelectedTable.expositores) {
      console.log("exp es: " + exp);

      this.arrayExp.push(exp._id);
    }
    var pos = this.arrayExp.indexOf(expositor._id);
    this.arrayExp.splice(pos, 1);
    this.jornadaSelectedTable.expositores.splice(pos, 1);
    console.log("JornadaSelectedArrayRemoveExp" + this.jornadaSelectedTable.expositores);
    console.log("Array de IDsRemoveExp" + this.arrayExp);
    this.arrayExp = [];
  }
  removeTematicaOfTable(tematica: Tematica) {
    var tem;
    for (tem of this.jornadaSelectedTable.tematicas) {
      console.log("tem es: " + tem);

      this.arrayTem.push(tem._id);
    }
    var pos = this.arrayTem.indexOf(tematica._id);
    this.arrayTem.splice(pos, 1);
    this.jornadaSelectedTable.tematicas.splice(pos, 1);
    console.log("JornadaSelectedArrayRemoveTem" + this.jornadaSelectedTable.tematicas);
    console.log("Array de IDsRemoveTem" + this.arrayTem);
    this.arrayTem = [];
  }
  removeOrganizadorOfTable(organizador: Organizador) {
    var org;
    for (org of this.jornadaSelectedTable.organizadores) {
      console.log("org es: " + org);

      this.arrayOrg.push(org._id);
    }
    var pos = this.arrayOrg.indexOf(organizador._id);
    this.arrayOrg.splice(pos, 1);
    this.jornadaSelectedTable.organizadores.splice(pos, 1);
    console.log("JornadaSelectedArrayRemoveOrg" + this.jornadaSelectedTable.organizadores);
    console.log("Array de IDsRemoveOrg" + this.arrayOrg);
    this.arrayOrg = [];
  }
}
