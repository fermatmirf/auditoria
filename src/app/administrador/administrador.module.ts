import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { LoginComponent } from './login/login.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { AgregarJornadaComponent } from './agregar-jornada/agregar-jornada.component';
import { EditarJornadaComponent } from './editar-jornada/editar-jornada.component';
import { ListarJornadaComponent } from './listar-jornada/listar-jornada.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [InicioAdminComponent, LoginComponent, PanelAdminComponent, AgregarJornadaComponent, EditarJornadaComponent, ListarJornadaComponent]
})
export class AdministradorModule { }
