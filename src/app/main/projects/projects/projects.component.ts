import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<Project[]>;
  
  showFiller = false;

  displayedColumns: string[] = ['id', 'name', 'teamSize', 'clientName', 'options'];

  constructor(public projectsService: ProjectsService, public dialog: MatDialog) { 
    this.projects$ = projectsService.getProjects();
  }

  deleteUser(employeeId: number) {
    this.projectsService.deleteProject(employeeId);
    this.projects$ = this.projectsService.getProjects();
  }

  openDialog(project: Project = null): void {
    const dialogRef = this.dialog.open(ProjectsDialog, {
      width: '50%',
      data: project
    });

    dialogRef.afterClosed().subscribe(() => {
      this.projects$ = this.projectsService.getProjects();
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'projects-dialog',
  templateUrl: 'projects.dialog.html',
  styleUrls: ['./projects.component.scss']})

export class ProjectsDialog {

  form: FormGroup;
  submitButtonText = 'Create';

  constructor(
    public dialogRef: MatDialogRef<ProjectsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Project, private fr: FormBuilder, public projectsService: ProjectsService) {
      this.form = this.fr.group({
        id: [''],  
        name: ['', Validators.required],
        teamSize: [''],
        clientName: ['', Validators.required],
      })

      if (data) {
        this.submitButtonText = 'Update';
        this.form.patchValue({
          id: data.id,
          name: data.name,
          teamSize: data.teamSize,
          clientName: data.clientName,
        });
      }
      
    }

  onSubmit() {
    switch(this.submitButtonText) {
      case 'Update':
        this.projectsService.updateProject(this.form.value);
        break;
      case 'Create': 
        this.projectsService.createProject(this.form.value);
        break;
    }
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
