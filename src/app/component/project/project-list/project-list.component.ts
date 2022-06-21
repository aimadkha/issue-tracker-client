import { Component, OnInit } from '@angular/core';

import { ProjectService } from './../../../service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: any = [];
  showReportProject = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects() {
    this.projectService.getAllProject().subscribe((data) => {
      this.projects = data;
    });
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(
      data => {
        this.projectService.getAllProject().subscribe(
          data => {
            this.projects = data;
          }
        )
      }
    )
  }

  onCloseReport() {
    this.showReportProject = false;
    this.getProjects();
  }
}
