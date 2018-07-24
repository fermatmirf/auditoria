//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing  } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//efectos
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll'; // <-- add
//Modulos
import { AdministradorModule } from './administrador/administrador.module';
//Servicios
import { UserGuard } from './services/user.guard';
import { UserService } from './services/user/user.service';
import { JornadaService } from './services/jornada/jornada.service';
import { InicioService } from './services/inicio/inicio.service';
import { ExpositorService } from './services/expositor/expositor.service';
import { OrganizadorService } from './services/organizador/organizador.service';
import { TematicaService } from './services/tematica/tematica.service';
//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { JasepitComponent } from './jasepit/jasepit.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    JasepitComponent
  ],
  imports: [
    SimpleSmoothScrollModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    AdministradorModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService,JornadaService, UserGuard,InicioService,ExpositorService,OrganizadorService, TematicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
