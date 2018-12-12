import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent, DialogOverviewExampleDialog } from './employees/employees.component';
import  { HttpClientModule } from '@angular/common/http';
import {MatTableModule, MatButtonModule, MatIconModule, MatSidenavModule,
        MatToolbarModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [EmployeesComponent, DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule
  ],
  entryComponents: [ DialogOverviewExampleDialog],
  exports: [
    EmployeesComponent,
    MatTableModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule
  ]
})
export class EmployeesModule { }
