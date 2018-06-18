import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing  } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//Modulo custom
import { AdministradorModule } from './administrador/administrador.module';
//UserService
import { UserService } from './services/user/user.service';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AdministradorModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
