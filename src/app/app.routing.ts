import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { MisionVisonComponent } from "./mision-vison/mision-vison.component";
import { ServiciosComponent } from "./servicios/servicios.component"
import { InicioComponent } from "./inicio/inicio.component";

const routes:Routes = [
	{path: '', component: InicioComponent },
	{path: 'inicio', component: InicioComponent},
	{path: 'servicios', component: ServiciosComponent},
	{path: 'mision-vision', component: MisionVisonComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);