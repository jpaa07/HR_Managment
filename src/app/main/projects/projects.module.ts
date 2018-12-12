import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent, ProjectsDialog } from './projects/projects.component';
import  { HttpClientModule } from '@angular/common/http';
import {MatTableModule, MatButtonModule, MatIconModule, MatSidenavModule,
  MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from './projects.service';


@NgModule({
  declarations: [ProjectsComponent, ProjectsDialog],
  providers: [ProjectsService],
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
    MatInputModule
  ],
  entryComponents: [ ProjectsDialog],
  exports: [
    ProjectsComponent,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule
  ]
})
export class ProjectsModule { }
