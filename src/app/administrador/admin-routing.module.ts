import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioAdminComponent } from "./inicio-admin/inicio-admin.component";
import { LoginComponent } from "./login/login.component";
import { PanelAdminComponent } from "./panel-admin/panel-admin.component";
import { EditarJornadaComponent } from "./editar-jornada/editar-jornada.component";
import { ListarJornadaComponent } from "./listar-jornada/listar-jornada.component";
import { AgregarJornadaComponent } from "./agregar-jornada/agregar-jornada.component";

const adminRoutes: Routes = [
    {   
        path:'admin', 
        component: InicioAdminComponent,
        children: [
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'panel-admin', component: PanelAdminComponent
            },
            {
                path: 'editar-jornada', component: EditarJornadaComponent
            },
            {
                path: 'listar-jornada', component: ListarJornadaComponent
            },
            {
                path: 'registrar-jornada', component: AgregarJornadaComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}