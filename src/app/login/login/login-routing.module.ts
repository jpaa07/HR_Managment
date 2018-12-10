import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { EmployeesComponent } from 'src/app/main/employees/employees/employees.component';

const routes: Routes = [
    {path: 'employees', component: EmployeesComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }