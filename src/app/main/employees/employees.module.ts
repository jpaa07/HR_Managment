import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent, EmployeesDialog } from './employees/employees.component';
import  { HttpClientModule } from '@angular/common/http';
import {MatTableModule, MatButtonModule, MatIconModule, MatSidenavModule,
        MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './employees.service';
import { ProjectsService } from '../projects/projects.service';
import { RoutingService } from 'src/app/routing.service';

@NgModule({
  declarations: [EmployeesComponent, EmployeesDialog],
  providers: [EmployeesService, ProjectsService, RoutingService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  entryComponents: [ EmployeesDialog],
  exports: [ 
    EmployeesComponent,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class EmployeesModule { }
