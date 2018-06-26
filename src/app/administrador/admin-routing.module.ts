import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioAdminComponent } from "./inicio-admin/inicio-admin.component";
import { LoginComponent } from "./login/login.component";
import { EditarJornadaComponent } from "./editar-jornada/editar-jornada.component";
import { ListarJornadaComponent } from "./listar-jornada/listar-jornada.component";
import { AgregarJornadaComponent } from "./agregar-jornada/agregar-jornada.component";
import { UserGuard } from "../services/user.guard";

const adminRoutes: Routes = [
    {   
        path:'admin', 
        component: InicioAdminComponent,
        children: [
            {
                path: 'editar-jornada', component: EditarJornadaComponent, canActivate: [UserGuard],
            },
            {
                path: 'listar-jornada', component: ListarJornadaComponent, canActivate: [UserGuard],
            },
            {
                path: 'registrar-jornada', component: AgregarJornadaComponent, canActivate: [UserGuard],
            },
            {
                path: 'login', component: LoginComponent
            }
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