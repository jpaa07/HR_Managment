import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SectionsComponent } from './sections/sections.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './database.service';
import { EmployeesModule } from './employees/employees.module';
import { ProjectsModule } from './projects/projects.module';


@NgModule({
  declarations: [MenuComponent, SectionsComponent],
  imports: [
    CommonModule,
    EmployeesModule,
    ProjectsModule,
    HttpClientInMemoryWebApiModule.forRoot(DatabaseService),
  ],
  exports: []
})
export class MainModule { }
