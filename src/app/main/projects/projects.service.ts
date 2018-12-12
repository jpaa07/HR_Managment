import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url = 'app/projects';

  constructor(private http: HttpClient) { }

   getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  createProject(project: Project) {
    project.teamSize = 0;
    this.http.post<Project>(this.url, project).subscribe();
  }

  updateProject(project: Project) {
    console.log(project);
    this.http.put(`${this.url}/${project.id}`, project).subscribe();
  }

  deleteProject(projectId: number) {
    this.http.delete(`${this.url}/${projectId}`).subscribe();
  }

  updateTeamSize(projectId: number) {
    let project: Project;
    this.http.get<Project>(`${this.url}/${projectId}`).subscribe((data) => {
      project = data;
      project.teamSize +=  1;
      this.updateProject(project);
    });
  }
}
