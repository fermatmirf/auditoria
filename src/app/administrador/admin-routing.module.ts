import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioAdminComponent } from "./inicio-admin/inicio-admin.component";
import { LoginComponent } from "./login/login.component";
import { PanelAdminComponent } from "./panel-admin/panel-admin.component";

const adminRoutes: Routes = [
    {   
        path:'admin', 
        component: InicioAdminComponent,
        children: [
            {
                path: '**', redirectTo: 'admin',
            },
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'panel-admin', component: PanelAdminComponent
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