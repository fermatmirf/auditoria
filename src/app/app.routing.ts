import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";
import { JasepitComponent } from "./jasepit/jasepit.component";

const routes:Routes = [
	{path: '', component: InicioComponent},
	{path: 'jasepit', component: JasepitComponent},
	{path: 'inicio', component: InicioComponent},
	{path: '**', redirectTo: 'inicio'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);