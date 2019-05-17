import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { MaterialModule } from '../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PlayasComponent } from './components/playas/playas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    PlayasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule
  ]
})
export class LoggedModule { }
