import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ServiciosComponent } from "./servicios/servicios.component"
import { InicioComponent } from "./inicio/inicio.component";

const routes:Routes = [
	{path: '**', redirectTo: 'inicio' },
	{path: 'inicio', component: InicioComponent},
	{path: 'servicios', component: ServiciosComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);