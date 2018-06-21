//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing  } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//Modulos
import { AdministradorModule } from './administrador/administrador.module';
//Servicios
import { UserService } from './services/user/user.service';
import { JornadaService } from './services/jornada/jornada.service';
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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AdministradorModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService,JornadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
