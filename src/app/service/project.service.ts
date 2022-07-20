import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Issue } from '../common/issue';
import { Observable } from 'rxjs';
import { Project } from './../common/project';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://localhost:8080/track/api/project';
  private projects: Project[] = [];

  constructor(private http: HttpClient) { }


  createProject(project: Project): Observable<any>{
    return this.http.post(this.baseUrl, project, httpOptions);
  }
  
  getAllProject(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  deleteProject(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getproject(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProject(id: number, project: Project): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, project);
  }

  addIssueToProject(projectId: number, issue: Issue): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${projectId}`, issue);
  }
}
