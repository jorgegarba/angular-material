import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PlayasComponent } from './components/playas/playas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path:'',
        component:SidenavComponent,
        children:[
            {
                path:'playas',
                component:PlayasComponent
            },
            {
                path:'dashboard',
                component:DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class LoggedRoutingModule { }