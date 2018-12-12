import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { EmployeesComponent } from 'src/app/main/employees/employees/employees.component';
import { ProjectsComponent } from 'src/app/main/projects/projects/projects.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'employees', component: EmployeesComponent, canActivate: [AuthenticationGuard]},
    {path: 'projects', component: ProjectsComponent, canActivate: [AuthenticationGuard]},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }