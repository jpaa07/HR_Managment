import { Component, OnInit, Inject } from '@angular/core';
import { Employees } from './employees.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/projects.model';
import { RoutingService } from 'src/app/routing.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  employees$: Observable<Employees[]>;
  
  showFiller = false;

  displayedColumns: string[] = ['id', 'name', 'company', 'age', 'birthday', 
    'favoriteColor', 'project', 'options'];

  constructor(public employeesService: EmployeesService, public projectsService: ProjectsService, 
    public dialog: MatDialog, private routingService: RoutingService) { 
    this.employees$ = employeesService.getEmployees();
  }

  goToEmployees() {
    this.routingService.gotoEmployees();
  }
  
  goToProjects() {
    this.routingService.goToProjects();
  }

  goToLogin() {
    this.routingService.goToLogin();
  }

  deleteUser(employee: Employees) {
    this.employeesService.deleteEmployee(employee.id);
    this.employees$ = this.employeesService.getEmployees();
    this.projectsService.removeUserFromProject(employee.project);
  }

  openDialog(employee: Employees = null): void {
    const dialogRef = this.dialog.open(EmployeesDialog, {
      width: '50%',
      data: employee
    });

    dialogRef.afterClosed().subscribe(() => {
      this.employees$ = this.employeesService.getEmployees();
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'employees-dialog',
  templateUrl: 'employees.dialog.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesDialog {

  form: FormGroup;
  submitButtonText = 'Create';
  previousTeam;
  projects$: Project[];

  selectedValue: string;
  
  constructor(
    public dialogRef: MatDialogRef<EmployeesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Employees, private fr: FormBuilder,
     public employeesService: EmployeesService, public projectsService: ProjectsService) {

      projectsService.getProjects().subscribe((data) => {
        this.projects$ = data;
      });

      this.form = this.fr.group({
        id: [''],  
        name: ['', Validators.required],
        company: ['', Validators.required],
        age: ['', Validators.required],
        birthday: ['', Validators.required],
        favoriteColor: ['', Validators.required],
        project: ['', Validators.required]
      })

      if (data) {
        this.previousTeam = data.project;
        this.submitButtonText = 'Update';
        this.form.patchValue({
          id: data.id,
          name: data.name,
          company: data.company,
          age: data.age,
          birthday: data.birthday,
          favoriteColor: data.favoriteColor,
          project: data.project
        });
      }
      
    }

  onSubmit() {
    switch(this.submitButtonText) {
      case 'Update':
        this.employeesService.updateEmployee(this.form.value);
        if(this.previousTeam != this.form.value.project) {
          this.projectsService.removeUserFromProject(this.previousTeam);
          this.projectsService.addUserToProject(this.form.value.project);
        }
        break;
      case 'Create': 
        this.employeesService.createEmployee(this.form.value);
        this.projectsService.addUserToProject(this.form.value.project);
        break;
    }
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
