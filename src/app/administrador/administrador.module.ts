//cosas de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//rutas
import { AdminRoutingModule } from './admin-routing.module';
//componentes
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { LoginComponent } from './login/login.component';
import { AgregarJornadaComponent } from './agregar-jornada/agregar-jornada.component';
import { EditarJornadaComponent } from './editar-jornada/editar-jornada.component';
import { ListarJornadaComponent } from './listar-jornada/listar-jornada.component';
import { UserGuard } from '../services/user.guard';
import { UserService } from '../services/user/user.service';
//servicios

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [InicioAdminComponent, LoginComponent, AgregarJornadaComponent, EditarJornadaComponent, ListarJornadaComponent],
  providers:[UserService, UserGuard]
})
export class AdministradorModule { }
