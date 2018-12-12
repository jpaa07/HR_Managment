import { Component, OnInit, Inject } from '@angular/core';
import { Employees } from './employees.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Observable } from 'rxjs';


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

  constructor(public employeesService: EmployeesService, public dialog: MatDialog) { 
    this.employees$ = employeesService.getEmployees();
  }

  deleteUser(employeeId: number) {
    this.employeesService.deleteEmployee(employeeId);
    this.employees$ = this.employeesService.getEmployees();
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

  constructor(
    public dialogRef: MatDialogRef<EmployeesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Employees, private fr: FormBuilder, public employeesService: EmployeesService) {
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
        break;
      case 'Create': 
        this.employeesService.createEmployee(this.form.value);
        break;
    }
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
