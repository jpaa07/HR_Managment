import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import  { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [EmployeesComponent]
})
export class EmployeesModule { }
