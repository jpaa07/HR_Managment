import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees.model';
import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees$: Employees[];
  dataSource;
  url = 'app/employees';
  showFiller = false;

  displayedColumns: string[] = ['id', 'name', 'company', 'age', 'birthday', 
    'favoriteColor', 'project', 'options'];

  constructor(private http: HttpClient, public dialog: MatDialog) { 
    this.http.get<Employees[]>(this.url).subscribe((data) => {
      this.employees$ = data; 
    });
    this.dataSource = new MatTableDataSource<Employees>(this.employees$);
  }

  deleteUser(userId: number) {
    this.http.delete(`${this.url}/${userId}`).subscribe(() => {
        this.http.get<Employees[]>(this.url).subscribe((data) => {
        this.employees$ = data; 
      });
    });
  }

  editUser(userId: number) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'employees-dialog',
  templateUrl: 'employees.dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
