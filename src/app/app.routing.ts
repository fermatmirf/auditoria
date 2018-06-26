import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";
import { JasepitComponent } from "./jasepit/jasepit.component";

const routes:Routes = [
	{path: '', component: InicioComponent},
	{path: 'jasepit', component: JasepitComponent},
	{path: 'inicio', component: InicioComponent},
	
	//{path: "404", component: NotFoundComponent},
	//{path: "**", redirectTo: "/404"}
	{path: '**', redirectTo: 'inicio'}//podria ir un componente de not found page;
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);