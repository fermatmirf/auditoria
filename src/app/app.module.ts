import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing  } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MisionVisonComponent } from './mision-vison/mision-vison.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MisionVisonComponent,
    ServiciosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
