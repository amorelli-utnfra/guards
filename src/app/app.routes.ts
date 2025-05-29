import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { canActivateChildGuard } from './guards/can-activate-child.guard';
import { canMatchGuard } from './guards/can-match.guard';
import { MatchComponent } from './components/match/match.component';

export const routes: Routes = [
    {
        path: "", 
        pathMatch: "full",
        redirectTo: "login"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path:"padre",
        component: PadreComponent,
        canActivateChild: [canActivateChildGuard],
        children:[
            {
                path: "hijo",
                component: HijoComponent
            }
        ]
    },
    {
        path: "auth",
        data: { role: "gerente general" },
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: "form",
        component: FormComponent,
        canDeactivate: [canDeactivateGuard]
    },
    {
        path: "match",
        component: MatchComponent,
        canMatch: [canMatchGuard]
    },
    {
        path: "modules",
        loadChildren: () => import('./modules/modules-routing.module').then(m => m.ModulesRoutingModule),
        canMatch: [canMatchGuard]
    }

];
